import type {Language} from '../lib/course';
import {ModuleEighteenMedia} from './MediaSixteenEighteen';
import {ModuleNineteenMedia,ModuleTwentyMedia} from './MediaNineteenTwentyOne';
export default function InteractiveEighteenTwentyModel({moduleId,language}:{moduleId:number;language:Language}){if(moduleId===18)return <ModuleEighteenMedia language={language}/>;if(moduleId===19)return <ModuleNineteenMedia language={language}/>;return <ModuleTwentyMedia language={language}/>}
