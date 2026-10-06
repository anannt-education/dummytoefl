import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const registry = {};
new Function('window', readFileSync('data/test-registry.js', 'utf8'))(registry);
globalThis.window = registry;
const ResultQuestions = new Function(readFileSync('js/result-questions.js', 'utf8') + '\nreturn ResultQuestions;')();
globalThis.fetch = async file => ({ ok: true, text: async () => readFileSync(file, 'utf8') });
function dataset(section, n) {
  const entry = registry.TEST_REGISTRY.sectionTests[section].find(e => e.id === `${section}-test-${n}`);
  const scope = {};
  new Function('window', readFileSync(entry.file, 'utf8'))(scope);
  return scope[entry.global];
}

describe('question and answer exports', () => {
  test('all 80 datasets include every question and task', () => {
    for (let n = 1; n <= 20; n++) {
      const data = Object.fromEntries(['reading', 'listening', 'writing', 'speaking'].map(s => [s, dataset(s, n)]));
      for (const path of ['easy', 'hard']) {
        const report = ResultQuestions.build(data, { adaptivePaths: { reading: path, listening: path } });
        for (const [section, count] of Object.entries({reading:50, listening:47, writing:12, speaking:11})) {
          expect(report[section].length).toBe(count);
          expect(new Set(report[section].map(q => q.id)).size).toBe(count);
        }
      }
    }
  });
  test('pairs all answer formats and preserves prompt context', () => {
    const data = Object.fromEntries(['reading', 'listening', 'writing', 'speaking'].map(s => [s, dataset(s, 1)]));
    const result = {
      answers: {'ctw-1-w1':'ions', 'rdl-email-1-q1':'b', 'lt1-m1-cr1':'a'},
      writingContent: {'w1-email-1':'My email', 'w1-disc-1':'My discussion'},
      sentenceOrders: {'w1-bas-1':['got','it']},
      recordings: {[data.speaking.listenAndRepeat[0].id]:{mimeType:'audio/webm',size:123}},
      timesSpent: {'rdl-email-1-q1':7}
    };
    const report = ResultQuestions.build(data, result);
    const word = report.reading.find(q => q.id === 'ctw-1-w1');
    expect(word.answer).toBe('ions');
    expect(word.correctAnswer).toBe('ions');
    expect(word.context.paragraph).toContain('Coral reefs');
    const reading = report.reading.find(q => q.id === 'rdl-email-1-q1');
    expect(reading.selectedOptions[0].text).toContain('return borrowed');
    expect(reading.context.body).toContain('April 15');
    expect(reading.timeSpent).toBe(7);
    const listening = report.listening.find(q => q.id === 'lt1-m1-cr1');
    expect(listening.question.transcript).toContain('professor');
    expect(listening.answer).toBe('a');
    expect(report.writing[0].answer).toEqual(['got','it']);
    expect(report.writing[10].answer).toBe('My email');
    expect(report.writing[10].question.requiredPoints.length).toBe(3);
    expect(report.writing[11].question.professorPrompt.text).toBeTruthy();
    expect(report.writing[11].question.studentResponses.length).toBe(2);
    expect(report.speaking[0].question.sentence).toBeTruthy();
    expect(report.speaking[0].answer.recording.size).toBe(123);
    expect(report.speaking[7].context.scenario).toBeTruthy();
    expect(report.speaking[7].question.prompt).toBeTruthy();
    expect(report.speaking[7].answer).toBeNull();
  });
  test('honors adaptive routes and section-only filtering', () => {
    const question = id => ({completeTheWords:[{id:'paragraph',paragraph:'text',words:[{id,answer:'yes'}]}]});
    const source = {...question('m1'),module2Easy:question('easy'),module2Hard:question('hard')};
    const report = ResultQuestions.build({reading:source,writing:dataset('writing',1)}, {sectionOnly:'reading',adaptivePaths:{reading:'easy'}});
    expect(Object.keys(report)).toEqual(['reading']);
    expect(report.reading.map(q=>q.id)).toEqual(['m1','easy']);
  });
  test('reconstructs mixed full tests without mutating stored results', async () => {
    const old = {testId:'test17', answers:{}, scores:{reading:{routingPath:'easy'}}};
    const [result] = await ResultQuestions.enrich([old]);
    expect(old.questionAnswers).toBeUndefined();
    expect(result.questionAnswers.reading[0].context.id).toBe(dataset('reading',18).completeTheWords[0].id);
    expect(result.questionAnswers.speaking[0].id).toBe(dataset('speaking',20).listenAndRepeat[0].id);
    expect(result.questionAnswers.writing[0].id).toBe(dataset('writing',19).buildASentence[0].id);
    expect(result.questionAnswers.listening[0].id).toBe(dataset('listening',17).modules[0].chooseResponse[0].id);
    expect(result.questionContextStatus).toContain('reconstructed');
  });
  test('preserves snapshots and isolates speaking const declarations', async () => {
    const snapshot = {testId:'test1',questionAnswers:{reading:[{id:'original'}]},questionContextStatus:'snapshot from test session'};
    const results = await ResultQuestions.enrich([snapshot,{testId:'speaking-test-1'},{testId:'speaking-test-2'}]);
    expect(results[0]).toEqual(snapshot);
    expect(Object.keys(results[1].questionAnswers)).toEqual(['speaking']);
    expect(results[2].questionAnswers.speaking[0].id).toBe(dataset('speaking',2).listenAndRepeat[0].id);
  });
  test('reports missing datasets instead of inventing context', async () => {
    const [result] = await ResultQuestions.enrich([{testId:'test999'}]);
    expect(result.questionAnswers).toEqual({});
    expect(result.questionContextStatus).toBe('unavailable');
    expect(result.questionContextWarnings.length).toBe(4);
  });
  test('JSON and ZIP buttons both export question-answer pairs and audio', async () => {
    const saved = [{id:'result1',testId:'test1',scores:{},answers:{'ctw-1-w1':'ions'},writingContent:{'w1-email-1':'My response'},recordings:{'s1-lr-1':{mimeType:'audio/webm'}}}];
    const elements = {};
    const document = {
      getElementById(id) { return elements[id] ||= {innerHTML:'',textContent:'',disabled:false}; },
      createElement() { return {click(){},remove(){}}; },
      body:{appendChild(){}}
    };
    let downloaded;
    const URL = {createObjectURL(blob){downloaded=blob;return 'blob:export'},revokeObjectURL(){}};
    const audio = new Blob(['audio bytes'],{type:'audio/webm'});
    const AudioStore = {async getClip(){return {blob:audio,mimeType:'audio/webm'}}};
    const ZipExport = new Function(readFileSync('js/zip-export.js','utf8') + '\nreturn ZipExport;')();
    const html = readFileSync('scores.html','utf8');
    const inline = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join('\n');
    new Function('window','document','localStorage','location','URL','AudioStore','ZipExport','ResultQuestions','setTimeout',inline)(
      registry,document,{getItem(){return JSON.stringify(saved)}},{search:''},URL,AudioStore,ZipExport,ResultQuestions,()=>{}
    );
    await elements['dl-json'].onclick();
    const json = JSON.parse(await downloaded.text());
    expect(json[0].questionAnswers.reading[0].answer).toBe('ions');
    expect(json[0].questionAnswers.writing[10].question.situation).toBeTruthy();
    expect(elements['dl-json'].disabled).toBe(false);
    await elements['dl-zip'].onclick();
    const bytes = new Uint8Array(await downloaded.arrayBuffer());
    const view = new DataView(bytes.buffer);
    const files = {};
    let offset = 0;
    while (view.getUint32(offset,true) === 0x04034b50) {
      const size=view.getUint32(offset+18,true), length=view.getUint16(offset+26,true);
      const name=new TextDecoder().decode(bytes.slice(offset+30,offset+30+length));
      const start=offset+30+length;
      files[name]=new TextDecoder().decode(bytes.slice(start,start+size));
      offset=start+size;
    }
    const bundled = JSON.parse(files['results.json']);
    expect(bundled[0].questionAnswers.speaking.length).toBe(11);
    const individual = Object.keys(files).find(p=>p.endsWith('/result.json'));
    expect(JSON.parse(files[individual]).questionAnswers).toEqual(bundled[0].questionAnswers);
    const manifest = JSON.parse(files['manifest.json']);
    expect(files[manifest.recordings[0].path]).toBe('audio bytes');
    expect(elements['dl-zip'].disabled).toBe(false);
    expect(saved[0].questionAnswers).toBeUndefined();
  });
});
