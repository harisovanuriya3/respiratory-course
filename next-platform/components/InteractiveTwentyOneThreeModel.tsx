import type {Language} from '../lib/course';
import {ModuleTwentyOneMedia} from './MediaNineteenTwentyOne';
import {ModuleTwentyTwoMedia,ModuleTwentyThreeMedia} from './MediaTwentyTwoThree';
export default function InteractiveTwentyOneThreeModel({moduleId,language}:{moduleId:number;language:Language}){if(moduleId===21)return <ModuleTwentyOneMedia language={language}/>;if(moduleId===22)return <ModuleTwentyTwoMedia language={language}/>;return <ModuleTwentyThreeMedia language={language}/>}
