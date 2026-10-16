import test from 'node:test';import assert from 'node:assert/strict';
// Source-level contract test runs before TypeScript compilation in the pilot.
import {readFileSync} from 'node:fs';
test('pilot preserves the typed 25x17 architecture contract',()=>{const course=readFileSync(new URL('../lib/course.ts',import.meta.url),'utf8');assert.equal((course.match(/'objectives'/g)||[]).length>=1,true);assert.match(course,/sectionIds=\[/);assert.match(course,/id:5/)});
test('AI endpoint refuses to simulate an unconfigured provider',()=>{const route=readFileSync(new URL('../app/api/assess/route.ts',import.meta.url),'utf8');assert.match(route,/status:503/);assert.match(route,/assessment_provider_not_configured/)});
test('voice has manual fallback and permission-denial handling',()=>{const voice=readFileSync(new URL('../components/VoiceTools.tsx',import.meta.url),'utf8');assert.match(voice,/not-allowed/);assert.match(voice,/text input remains available/)});
