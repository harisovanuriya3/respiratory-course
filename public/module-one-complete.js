import {lessonOne as baseLessonOne} from './module-one-upgrade.js';
import {moduleOneDeepTheory} from './module-one-deep-theory.js';
export function lessonOne(section,language){return baseLessonOne(section,language)+(section==='theory'?moduleOneDeepTheory(language):'')}
