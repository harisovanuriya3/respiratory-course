import assert from 'node:assert/strict';
import {speechLocale,speechChunks} from './public/course-speech.js';
assert.deepEqual([0,1,2].map(speechLocale),['ru-RU','en-US','kk-KZ']);
const text=Array.from({length:1000},()=> 'pressure').join(' ');const chunks=speechChunks(text);assert.ok(chunks.length>1);assert.ok(chunks.every(x=>x.length<=260));assert.equal(chunks.join(' '),text);assert.deepEqual(speechChunks(''),[]);
console.log('Speech: locale mapping and lossless bounded text chunking passed.');
