import {activeLessonId} from './java.js'

// LESSON MODULES
import renderLessonTitle from './modules/renderLessonTitle.js';
import videoActivity from './modules/videoActivity.js';
import exampleCards from './modules/exampleCards.js';
import generateBlockquote from './modules/generateBlockquote.js';
import introConcept from './modules/introConcept.js';
import generateSidenav from './modules/generateSidenav.js';
import generateDivider from './modules/generateDivider.js';
import blankSentences from './modules/blankSentences.js';
import generateFooter from './modules/generateFooter.js';
import readLessonsFromDb from './readLessonsFromDb.js';
import activitiesModule from './modules/activitiesModule.js'
import renderUserNavBarButtons from './renderUserNavBarButtons.js';
import verbChart from './modules/verbChart.js'
import timedWritingActivity from './modules/timedWritingActivity.js'



export default function renderLesson(level, lesson) {
    
    const lessonContainer = document.querySelector('.lessonContainer'); 
    lessonContainer.innerHTML = '';
    //This is an async function. It returns a promise
    const getActivitiesFromDb = readLessonsFromDb(level,lesson)

    getActivitiesFromDb.then((lessons)=>{
        
        lessons.activitiesArray.forEach(activityObj => {
            // console.log("Es", activityObj.activityModuleType);    
            if(activityObj.activityModuleType=="renderLessonTitle"){
                activitiesModule.renderLessonTitle(activityObj)
            }
            if(activityObj.activityModuleType=="introConcept"){
                activitiesModule.introConcept(activityObj)
            }
            if(activityObj.activityModuleType=="missingWordsParagraph"){
                activitiesModule.missingWordsParagraph(activityObj)
            }
            
            if(activityObj.activityModuleType=="tutorWritingActivity"){
                activitiesModule.tutorWritingActivity(activityObj)
            }

            if(activityObj.activityModuleType=="exampleCards"){
                activitiesModule.exampleCards(activityObj)
            }
            if(activityObj.activityModuleType=="generateBasicText"){
                activitiesModule.generateBasicText(activityObj)
            }
            if(activityObj.activityModuleType=="blankSentences"){
                activitiesModule.blankSentences(activityObj)
            }
            if(activityObj.activityModuleType=="slider"){
                activitiesModule.slider(activityObj)
            }
            if(activityObj.activityModuleType=="wordsTable"){
                activitiesModule.wordsTable(activityObj)
            }
            if(activityObj.activityModuleType=="multipleChoicePlusAnswers"){
                activitiesModule.multipleChoicePlusAnswers(activityObj)
            }
            if(activityObj.activityModuleType=="videoActivity"){
                activitiesModule.videoActivity(activityObj)
            }
            if(activityObj.activityModuleType=="verbChart"){
                activitiesModule.verbChart(activityObj)
            }
            if(activityObj.activityModuleType=="wildCard"){
                activitiesModule.wildCard(activityObj)
            }
            if(activityObj.activityModuleType=="conversationMultipleChoice"){
                activitiesModule.conversationMultipleChoice(activityObj)
            }
            if(activityObj.activityModuleType=="timedWritingActivity"){
                activitiesModule.timedWritingActivity(activityObj)
            }

        });
        activitiesModule.generateFooter();
        });
        
        // updateCurrentLessonId(level,lesson)
        activeLessonId[0]= level;
        activeLessonId[1]= lesson
    }



    