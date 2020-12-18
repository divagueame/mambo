import {db} from './java.js';
console.log("Add lesson activies init")
// let activitiesArray = [
//     ///////////////LEVEL 1///////////
//     {
//         'level': 1,
//         'lessonNumber': 1,
//         'activityOrder': 1,
//         'activityId': '1.1.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '1Masculino o femenino',
//         'activityObj': {
//             'title': "Masculino o femenino"
//         }
//     },    {
//         'level': 1,
//         'lessonNumber': 1,
//         'activityOrder': 2,
//         'activityId': '1.1.2',
//         'activityModuleType': 'introConcept',
//         'lessonTitle': 'titulo nuevo',
//         'activityObj': {
//             'cardTitle': 'This is cardtitle',
//             'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

//         }
//     },
//         {
//         'level': 1,
//         'lessonNumber': 1,
//         'activityOrder': 3,
//         'activityId': '1.1.3',
//         'activityModuleType': 'introConcept',
//         'lessonTitle': 'titulo nuevo',
//         'activityObj': {
//             'cardTitle': 'This is cardtitle',
//             'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

//         }
//     },   
//     //2
//       {
//         'level': 1,
//         'lessonNumber': 2,
//         'activityOrder': 1,
//         'activityId': '1.2.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': 'titulo nuevo',
//         'activityObj': {
//             'title': "2 Masculino o femenino"
//         }
//     },   
//     {
//        'level': 1,
//        'lessonNumber': 2,
//        'activityOrder': 2,
//        'activityId':  '1.2.2',
//        'activityModuleType': 'introConcept',
//        'lessonTitle': '5 es un text',
//        'activityObj': {
//            'cardTitle': 'This is another cardtitle',
//            'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

//        }
//    },  
//      {
//         'level': 1,
//         'lessonNumber': 2,
//         'activityOrder': 3,
//         'activityId':  '1.2.3',
//         'activityModuleType': 'introConcept',
//         'lessonTitle': '5 es un text',
//         'activityObj': {
//             'cardTitle': 'This is another cardtitle',
//             'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

//         }
//     }, 
//     //3
//     {
//         'level': 1,
//         'lessonNumber': 3,
//         'activityOrder': 1,
//         'activityId':  '1.3.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '3 es un text',
//         'activityObj': {
//             'title': "3 Masculino o femenino"
//         }
//     }, 
//     {
//         'level': 1,
//         'lessonNumber': 3,
//         'activityOrder': 2,
//         'activityId':  '1.3.2',
//         'activityModuleType': 'introConcept',
//         'lessonTitle': '5 es un text',
//         'activityObj': {
//             'cardTitle': 'This is another cardtitle',
//             'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

//         }
//     },
    
    
//     ///////LEVEL 2/////////
//     {
//         'level': 2,
//         'lessonNumber': 1,
//         'activityOrder': 1,
//         'activityId': '2.1.1',
//         'activityModuleType': 'introConcept',
//         'lessonTitle': '21 es un text',
//         'activityObj': {
//             'cardTitle': 'This is  esanother cardtitle',
//             'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

//         }
//     },  
//       {
//         'level': 2,
//         'lessonNumber': 2,
//         'activityOrder':1,
//         'activityId': '2.2.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '22otro',
//         'activityObj': {}
//     },
//     {
//         'level': 2,
//         'lessonNumber': 2,
//         'activityOrder': 2,
//         'activityId': '2.2.2',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': 'otro',
//         'activityObj': {}
//     },
//     {
//         'level': 2,
//         'lessonNumber': 2,
//         'activityOrder': 3,
//         'activityId': '2.2.3',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': 'otro',
//         'activityObj': {}
//     },
//     //////////////////LEVEL 3/////////////
//     {
//         'level': 3,
//         'lessonNumber': 1,
//         'activityOrder': 1,
//         'activityId': '3.1.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '31otro',
//         'activityObj': {}
//     },
//     {
//         'level': 3,
//         'lessonNumber': 2,
//         'activityOrder': 1,
//         'activityId': '3.2.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '32otro',
//         'activityObj': {}
//     },
//     {
//         'level': 4,
//         'lessonNumber': 1,
//         'activityOrder': 1,
//         'activityId': '4.1.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '41otro',
//         'activityObj': {}
//     },
//     {
//         'level': 5,
//         'lessonNumber': 1,
//         'activityOrder': 1,
//         'activityId': '5.1.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '51otro1',
//         'otherInfo': 'asfsadf',
//         'activityObj': {}
//     },
//     {
//         'level': 5,
//         'lessonNumber': 2,
//         'activityOrder': 1,
//         'activityId': '5.2.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '52vgtro2',
//         'activityObj': {}
//     }
//     ,
//     {
//         'level': 5,
//         'lessonNumber': 3,
//         'activityOrder': 1,
//         'activityId': '5.3.1',
//         'activityModuleType': 'renderLessonTitle',
//         'lessonTitle': '53otro3',
//         'otherInfo': 'asfsadsdf',
//         'activityObj': {}
//     }
// ];
    
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
                'paragraphText': '<span class="guessWord">La</span> casa es bonita. <span class="guessWord">La</span> puerta es pequeña y ventana es grande. <span class="guessWord">El</span> perro es negro. La cabeza es pequeña. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. La cabeza es pequena. es negro. ', 
                'activityHeaderText': 'Completa los huecos con "el" si es masculino o "la" si es femenino. (El chico/La chica)',
                'helptags': true,
                'autoShowHelptags': false,
                'sideImgLocation': 'img/lesson1.1/chair.jpg'
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