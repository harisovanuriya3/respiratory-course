import data from '../generated/legacy-content.json';import type {Language,SectionId} from './course';
type Entry={html:string;sha256:string;characters:number};const pages=data.pages as Record<string,Entry>;
export function legacyContent(moduleId:number,section:SectionId,language:Language){const entry=pages[`${moduleId}/${section}/${language}`];if(!entry)throw Error(`missing legacy content ${moduleId}/${section}/${language}`);return entry}
