
// LESSON MODULES
import renderLessonTitle from './renderLessonTitle.js';
import videoActivity from './videoActivity.js';
import examplesCard from './examplesCard.js';
import generateBlockquote from './generateBlockquote.js';
import introConcept from './introConcept.js';
import generateSidenav from './generateSidenav.js';
import generateDivider from './generateDivider.js';

import missingWordSentencesExercise from './missingWordSentencesExercise.js';
import generateFooter from './generateFooter.js';
import readLessonActivitiesFromDb from './readLessonActivitiesFromDb.js';



export default function renderLesson(level, lesson) {
// console.log("Render lesson init")
    const lessonContainer = document.querySelector('.lessonContainer'); 

    //This is an async function. It returns a promise
    const getActivitiesFromDb = readLessonActivitiesFromDb(level,lesson)

    getActivitiesFromDb.then((activitiesArray)=>{
        // console.log("sd",activitiesArray);
        activitiesArray.forEach(activity => {
            // console.log(activity)
        });

    })

    // renderLessonTitle(lessonContainer);
    
    // generateBlockquote(lessonContainer)
    // generateSidenav();
    // generateDivider(lessonContainer)
    // introConcept(lessonContainer)

    // missingWordSentencesExercise(lessonContainer, exerciseSentences);
    

    // examplesCard(lessonContainer);
    

    // videoActivity(lessonContainer)
    
    // generateFooter(lessonContainer);
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


