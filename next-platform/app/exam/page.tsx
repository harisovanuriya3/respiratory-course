import RespiratoryExam from '../../components/RespiratoryExam';
import {legacyContent} from '../../lib/legacy-content';
import {extractLegacyQuizOrEmpty} from '../../lib/legacy-quiz';
import {isLanguage,modules} from '../../lib/course';
export default async function ExamPage({searchParams}:{searchParams:Promise<{lang?:string}>}){
 const requested=(await searchParams).lang,language=isLanguage(requested||'')?requested as 'RU'|'EN'|'KZ':'RU';
 const bank=modules.flatMap(module=>extractLegacyQuizOrEmpty(legacyContent(module.id,'tests',language).html).map(q=>({id:module.id+'-'+q.id,moduleId:module.id,moduleTitle:module.title[language],prompt:q.prompt,options:q.options,correctId:q.correctId,explanation:q.explanation})));
 return <RespiratoryExam language={language} bank={bank}/>;
}
