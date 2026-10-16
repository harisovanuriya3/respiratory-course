import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const app=readFileSync('public/app.js','utf8'),source=readFileSync('public/learning-workspace.js','utf8');
assert.ok(app.includes("import {initLearningWorkspace} from './learning-workspace.js';"));assert.ok(app.includes('initLearningWorkspace();'));
for(const feature of ['localStorage','workspace-notes','workspace-complete','workspace-bookmark','canvas','pointerdown'])assert.ok(source.includes(feature),feature);
for(const language of ['RU','EN','KZ'])assert.ok(source.includes(language),language);assert.ok(source.includes("/^\\/modules\\/(\\d+)\\/([a-z-]+)$/"));assert.ok(!source.includes('fetch('));
console.log('PASS: trilingual local notes, progress, bookmarks and physiology sketch pad');
