import {db} from './java.js';
    
let lessonsArray = [
    //LEVEL 1
        //LESSON 1.1
    {
        'level': 1,
        'lessonNumber': 1,
        'lessonTitle': '1Sustantivo1s',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "Masculino o femenino"
            },
            {
                'activityModuleType': 'introConcept',
                'activityOrder': 2,
                'cardTitle': '1This is cardtitle',
                'cardContent': "1I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            },
            {
                'activityModuleType': 'missingWordsParagraph',
                'activityOrder': 3,
                'paragraphText': '¿Tienes la suerte de tener un <span class="guessWord">amigo</span> fiel que permanece a tu lado pase lo que pase? Ese amigo que realmente es un <span class="guessWord">tesoro</span>, que está a las duras y a las maduras, que sabe cuándo estás bien o cuándo estás mal, que sabe cómo animarte sin que tengas que decirle u ofrecerle nada a cambio. <span class="guessWord">Probablemente</span>, pocos podáis decir que tenéis a alguien que os muestre ese amor tan <span class="guessWord">incondicional</span>, pero los que lo tenéis, probablemente ese amigo tendrá forma de perro, gato o canario. A lo mejor deberíamos de cambiar el dicho por ”quien tiene una mascota, tiene un tesoro”, porque solo aquellos que cuentan con una saben del tipo de <span class="guessWord"></span>amor que estamos hablando.', 
                'activityHeaderText': 'Completa los huecos con "el" si es masculino o "la" si es femenino. (El chico/La chica)',
                'helptags': true,
                'autoShowHelptags': false,
                'sideImgLocation': 'img/lesson1.1/kitty.jpg'
            }
        ]
    },
    {
        'level': 1,
        'lessonNumber': 2,
        'lessonTitle': '2Sustantivos',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "2Masculino o femenino"
            },
            {
                'activityModuleType': 'introConcept',
                'activitx`yOrder': 2,
                'cardTitle': '2This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            }
        ]
    },
    {
        'level': 1,
        'lessonNumber': 3,
        'lessonTitle': '3Sustantivos',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "3Masculino o femenino"
            },
            {
                'activityModuleType': 'introConcept',
                'activitx`yOrder': 2,
                'cardTitle': '2This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            }
        ]
    },
    {
        'level': 1,
        'lessonNumber': 4,
        'lessonTitle': '4Sustantivos',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "2Masculino o femenino"
            },
            {
                'activityModuleType': 'introConcept',
                'activitx`yOrder': 2,
                'cardTitle': '2This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            }
        ]
    },
    //LEVEL 2
    {
        'level': 2,
        'lessonNumber': 1,
        'lessonTitle': 'Adjetivo2s',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "Adjetivos2Title"
            },
            {
                'activityModuleType': 'introConcept',
                'activityOrder': 2,
                'cardTitle': 'This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            },
            {
                'activityModuleType': 'introConcept',
                'activityOrder': 3,
                'cardTitle': 'This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            },
        ]
    },
    
]
// Update database from array of activities 
export default function lessonActivitiesDb() {
    lessonsArray.forEach((lesson)=>{
        // console.log(lesson)

const DBLessonsRef = db.collection('lessons').doc()
DBLessonsRef.set(lesson
, { merge: true })
.then(function() {
    console.log("Lessons added to db.");
})
.catch(function(error) {
    console.error("Error adding lesson to db: ", error);
});
})

}