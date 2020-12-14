import {updateCurrentLessonId} from './java.js'

// LESSON MODULES
import renderLessonTitle from './modules/renderLessonTitle.js';
import videoActivity from './modules/videoActivity.js';
import examplesCard from './modules/examplesCard.js';
import generateBlockquote from './modules/generateBlockquote.js';
import introConcept from './modules/introConcept.js';
import generateSidenav from './modules/generateSidenav.js';
import generateDivider from './modules/generateDivider.js';
import missingWordSentencesExercise from './modules/missingWordSentencesExercise.js';
import generateFooter from './modules/generateFooter.js';
import readLessonActivitiesFromDb from './readLessonActivitiesFromDb.js';
import activitiesModule from './modules/activitiesModule.js'
import renderUserNavBarButtons from './renderUserNavBarButtons.js';


export default function renderLesson(level, lesson) {
// console.log("Render lesson init")
    const lessonContainer = document.querySelector('.lessonContainer'); 
    lessonContainer.innerHTML = '';
    //This is an async function. It returns a promise
    const getActivitiesFromDb = readLessonActivitiesFromDb(level,lesson)

    getActivitiesFromDb.then((activitiesArray)=>{
        //Check each activity module type and invoque with that object
        activitiesArray.forEach(activity => {
            // console.log("Activity: ",activity)
            if(activity.activityModuleType=="renderLessonTitle"){
                activitiesModule.renderLessonTitle(activity.activityObj)
            }
            if(activity.activityModuleType=="introConcept"){
                activitiesModule.introConcept(activity.activityObj)
            }
        });
        
        updateCurrentLessonId(level,lesson)
        activitiesModule.generateFooter();
    })

// activitiesModule.displayHeader("INSIDE");
// activitiesModule.examplesCard("sd");
// activitiesModule.generateBlockquote("block!")

// renderUserNavBarButtons()
// activitiesModule.generateSidenav()
// activitiesModule.introConcept("Tgs ib")
// renderLessonTitle("sdfa");
// generateDivider()
// videoActivity("obj");
// missingWordSentencesExercise(exerciseSentences);
    


    
}




let exerciseSentences = [
    {
        text: "El gato de mi madre es muy bonito.",
        hiddenWord: "es",
        labelText: "verbo ser",
        helperText: "My mother's cat is very beautiful."
    },
    {
        text: "El padre come muchas galletas.",
        hiddenWord: "come",
        labelText: "verbo comer",
        helperText: "The father eats many cookies."
    },
    {
        text: "El profesor canta muy bien.",
        hiddenWord: "canta",
        labelText: "verbo cantar",
        helperText: "The teacher sings very well."
    },
    {
        text: "El perro corre muy rapido.",
        hiddenWord: "corre",
        labelText: "verbo correr",
        helperText: "The dog runs very fast."
    }
]


