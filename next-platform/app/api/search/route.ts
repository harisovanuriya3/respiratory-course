import {NextResponse} from 'next/server';
import content from '../../../generated/legacy-content.json';
import {isLanguage,moduleById,sectionNames} from '../../../lib/course';

const plain=(html:string)=>html.replace(/<[^>]+>/g,' ').replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/\s+/g,' ').trim();
export async function GET(request:Request){
  const url=new URL(request.url),query=(url.searchParams.get('q')||'').trim().normalize('NFKC'),language=url.searchParams.get('lang')||'RU';
  if(!isLanguage(language)||query.length<2)return NextResponse.json({results:[]});
  const needle=query.toLocaleLowerCase(language==='EN'?'en':'ru'),results=[] as Array<{href:string;module:string;section:string;snippet:string}>;
  for(const [key,page] of Object.entries(content.pages)){
    const [moduleValue,section,lang]=key.split('/');if(lang!==language)continue;
    const text=plain(page.html),lower=text.toLocaleLowerCase(language==='EN'?'en':'ru'),at=lower.indexOf(needle);if(at<0)continue;
    const moduleId=Number(moduleValue),start=Math.max(0,at-75),snippet=`${start?'…':''}${text.slice(start,at+needle.length+120)}${at+needle.length+120<text.length?'…':''}`;
    results.push({href:`/modules/${moduleId}/${section}?lang=${language}`,module:moduleById(moduleId)?.title[language]||`${moduleId}`,section:sectionNames[section as keyof typeof sectionNames][language],snippet});if(results.length===20)break;
  }
  return NextResponse.json({results});
}
