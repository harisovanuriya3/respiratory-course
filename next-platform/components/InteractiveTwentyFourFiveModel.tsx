import type {Language} from '../lib/course';
import {ModuleTwentyFiveMedia} from './MediaTwentyFourFive';
import ModuleTwentyFourMedia from './SpirometryInstrumentPanel';
export default function InteractiveTwentyFourFiveModel({moduleId,language}:{moduleId:number;language:Language}){return moduleId===24?<ModuleTwentyFourMedia language={language}/>:<ModuleTwentyFiveMedia language={language}/>}
