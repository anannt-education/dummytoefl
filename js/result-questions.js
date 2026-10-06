/* Pair saved answers with task definitions for offline/AI review exports. */
var ResultQuestions = (function () {
  'use strict';
  var sections = ['reading', 'listening', 'writing', 'speaking'];
  var cache = {};
  function copy(value) { return value == null ? null : JSON.parse(JSON.stringify(value)); }
  function withoutChildren(item) {
    var context = copy(item);
    delete context.questions;
    delete context.words;
    return context;
  }
  function build(data, result, paths) {
    var report = {};
    paths = paths || result.adaptivePaths || {};
    sections.forEach(function (section) {
      if (result.sectionOnly && result.sectionOnly !== section) return;
      var source = data && data[section];
      if (!source) return;
      var entries = [];
      function add(question, context, type, module) {
        var id = question.id;
        var answers = result.answers || {};
        var orders = result.sentenceOrders || {};
        var writing = result.writingContent || {};
        var recordings = result.recordings || {};
        var answer = null;
        if (section === 'speaking') answer = recordings[id] ? { recording: copy(recordings[id]), taskId: id } : null;
        else if (Object.prototype.hasOwnProperty.call(orders, id)) answer = copy(orders[id]);
        else if (Object.prototype.hasOwnProperty.call(writing, id)) answer = writing[id];
        else if (Object.prototype.hasOwnProperty.call(answers, id)) answer = copy(answers[id]);
        var correct = question.correctOrder || question.answer || null;
        if (question.options) correct = question.options.filter(function (o) { return o.correct; }).map(function (o) { return { id: o.id, text: o.text }; });
        entries.push({
          id: id, type: type || question.type || null, module: module || null,
          question: copy(question), context: copy(context), answer: answer,
          selectedOptions: question.options ? question.options.filter(function (o) {
            return Array.isArray(answer) ? answer.includes(o.id) : answer === o.id;
          }).map(function (o) { return { id: o.id, text: o.text }; }) : null,
          correctAnswer: copy(correct), timeSpent: (result.timesSpent || {})[id] ?? null
        });
      }
      function items(list, module) {
        (list || []).forEach(function (item) {
          if (item.words) item.words.forEach(function (word) { add(word, withoutChildren(item), 'complete_the_words', module); });
          else if (item.questions) item.questions.forEach(function (q) { add(q, withoutChildren(item), item.type || item.taskType, module); });
          else add(item, null, item.type, module);
        });
      }
      var path = paths[section] || ((result.scores || {})[section] || {}).routingPath;
      if (section === 'reading') {
        function readingModule(mod, number) {
          items(mod.completeTheWords, number);
          items(mod.dailyLife, number);
          items(mod.academicPassages, number);
        }
        readingModule(source, 1);
        var m2 = path === 'easy' ? source.module2Easy : path === 'hard' ? source.module2Hard : null;
        m2 = m2 || source.module2Hard || source.module2;
        if (m2) readingModule(m2, 2);
      } else if (section === 'listening') {
        function listeningModule(mod, number) {
          if (!mod) return;
          items(mod.chooseResponse, number);
          items(mod.conversations, number);
          items(mod.announcements, number);
          items(mod.academicTalks, number);
        }
        if (source.modules && source.modules.length) {
          listeningModule(source.modules[0], 1);
          var lm2 = path === 'easy' ? source.module2Easy || (source.modulesEasy || [])[1]
            : path === 'hard' ? source.module2Hard || (source.modulesHard || [])[1] : null;
          listeningModule(lm2 || source.modules[1], 2);
        } else listeningModule(source, 1);
      } else if (section === 'writing') {
        items(source.buildASentence, 1);
        if (source.writeAnEmail) add(source.writeAnEmail, null, null, 2);
        if (source.academicDiscussion) add(source.academicDiscussion, null, null, 3);
      } else {
        items(source.listenAndRepeat);
        if (source.interview) (source.interview.questions || []).forEach(function (q) {
          add(q, withoutChildren(source.interview), 'interview_video');
        });
      }
      report[section] = entries;
    });
    return report;
  }
  async function load(entry) {
    // Evaluate only registry-owned, same-origin datasets in an isolated scope.
    // Speaking datasets declare the same const, so global script injection is unsafe.
    if (!/^data\/(reading|listening|writing|speaking)\/test-\d+\.js$/.test(entry.file)) throw new Error('Invalid dataset path');
    if (!cache[entry.file]) {
      cache[entry.file] = (async function () {
        var response = await fetch(entry.file);
        if (!response.ok) throw new Error('Dataset unavailable: ' + entry.file);
        var scope = {};
        new Function('window', await response.text())(scope);
        if (!scope[entry.global]) throw new Error('Dataset missing: ' + entry.global);
        return scope[entry.global];
      })().catch(function (error) { delete cache[entry.file]; throw error; });
    }
    return cache[entry.file];
  }
  async function enrich(records) {
    var output = [];
    for (var original of records) {
      var result = copy(original);
      if (result.questionAnswers) { output.push(result); continue; }
      var data = {}, warnings = [];
      var full = /^test(\d+)$/.exec(result.testId || '');
      var groups = (window.TEST_REGISTRY || {}).sectionTests || {};
      for (var section of sections) {
        if (result.sectionOnly && result.sectionOnly !== section) continue;
        var entry;
        if (full) {
          var n = ((window.FULL_TEST_SECTIONS || {})[full[1]] || {})[section] || Number(full[1]);
          entry = (groups[section] || []).find(function (e) { return e.id === section + '-test-' + n; });
        } else entry = (groups[section] || []).find(function (e) { return e.id === result.testId; });
        if (!entry) {
          if (full || result.sectionOnly === section) warnings.push('No dataset found for ' + section);
          continue;
        }
        try {
          data[section] = await load(entry);
          if ((data[section].module2Easy || data[section].module2Hard || data[section].modulesEasy || data[section].modulesHard)
            && !(result.adaptivePaths || {})[section] && !((result.scores || {})[section] || {}).routingPath) {
            warnings.push('Original adaptive route is unknown for ' + section + '; module 2 uses the dataset default.');
          }
        }
        catch (error) { warnings.push(error.message); }
      }
      result.questionAnswers = build(data, result);
      result.questionContextStatus = Object.keys(data).length ? 'reconstructed from current datasets' : 'unavailable';
      if (!Object.keys(data).length && !warnings.length) warnings.push('No matching dataset for test ' + result.testId);
      if (warnings.length) result.questionContextWarnings = warnings;
      output.push(result);
    }
    return output;
  }
  return { build: build, enrich: enrich };
})();
