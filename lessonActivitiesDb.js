import {db} from './java.js';
console.log("Add lesson activies init")
let activitiesArray = [
    ///////////////LEVEL 1///////////
    {
        'level': 1,
        'lessonNumber': 1,
        'activityOrder': 1,
        'activityId': '1.1.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '1Masculino o femenino',
        'activityObj': {
            'title': "Masculino o femenino"
        }
    },    {
        'level': 1,
        'lessonNumber': 1,
        'activityOrder': 2,
        'activityId': '1.1.2',
        'activityModuleType': 'introConcept',
        'lessonTitle': 'titulo nuevo',
        'activityObj': {
            'cardTitle': 'This is cardtitle',
            'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

        }
    },
        {
        'level': 1,
        'lessonNumber': 1,
        'activityOrder': 3,
        'activityId': '1.1.3',
        'activityModuleType': 'introConcept',
        'lessonTitle': 'titulo nuevo',
        'activityObj': {
            'cardTitle': 'This is cardtitle',
            'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

        }
    },   
    //2
      {
        'level': 1,
        'lessonNumber': 2,
        'activityOrder': 1,
        'activityId': '1.2.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': 'titulo nuevo',
        'activityObj': {
            'title': "2 Masculino o femenino"
        }
    },   
    {
       'level': 1,
       'lessonNumber': 2,
       'activityOrder': 2,
       'activityId':  '1.2.2',
       'activityModuleType': 'introConcept',
       'lessonTitle': '5 es un text',
       'activityObj': {
           'cardTitle': 'This is another cardtitle',
           'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

       }
   },  
     {
        'level': 1,
        'lessonNumber': 2,
        'activityOrder': 3,
        'activityId':  '1.2.3',
        'activityModuleType': 'introConcept',
        'lessonTitle': '5 es un text',
        'activityObj': {
            'cardTitle': 'This is another cardtitle',
            'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

        }
    }, 
    //3
    {
        'level': 1,
        'lessonNumber': 3,
        'activityOrder': 1,
        'activityId':  '1.3.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '3 es un text',
        'activityObj': {
            'title': "3 Masculino o femenino"
        }
    }, 
    {
        'level': 1,
        'lessonNumber': 3,
        'activityOrder': 2,
        'activityId':  '1.3.2',
        'activityModuleType': 'introConcept',
        'lessonTitle': '5 es un text',
        'activityObj': {
            'cardTitle': 'This is another cardtitle',
            'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

        }
    },
    
    
    ///////LEVEL 2/////////
    {
        'level': 2,
        'lessonNumber': 1,
        'activityOrder': 1,
        'activityId': '2.1.1',
        'activityModuleType': 'introConcept',
        'lessonTitle': '21 es un text',
        'activityObj': {
            'cardTitle': 'This is  esanother cardtitle',
            'cardContent': "I black am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."

        }
    },  
      {
        'level': 2,
        'lessonNumber': 2,
        'activityOrder':1,
        'activityId': '2.2.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '22otro',
        'activityObj': {}
    },
    {
        'level': 2,
        'lessonNumber': 2,
        'activityOrder': 2,
        'activityId': '2.2.2',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': 'otro',
        'activityObj': {}
    },
    {
        'level': 2,
        'lessonNumber': 2,
        'activityOrder': 3,
        'activityId': '2.2.3',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': 'otro',
        'activityObj': {}
    },
    //////////////////LEVEL 3/////////////
    {
        'level': 3,
        'lessonNumber': 1,
        'activityOrder': 1,
        'activityId': '3.1.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '31otro',
        'activityObj': {}
    },
    {
        'level': 3,
        'lessonNumber': 2,
        'activityOrder': 1,
        'activityId': '3.2.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '32otro',
        'activityObj': {}
    },
    {
        'level': 4,
        'lessonNumber': 1,
        'activityOrder': 1,
        'activityId': '4.1.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '41otro',
        'activityObj': {}
    },
    {
        'level': 5,
        'lessonNumber': 1,
        'activityOrder': 1,
        'activityId': '5.1.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '51otro1',
        'otherInfo': 'asfsadf',
        'activityObj': {}
    },
    {
        'level': 5,
        'lessonNumber': 2,
        'activityOrder': 1,
        'activityId': '5.2.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '52vgtro2',
        'activityObj': {}
    }
    ,
    {
        'level': 5,
        'lessonNumber': 3,
        'activityOrder': 1,
        'activityId': '5.3.1',
        'activityModuleType': 'renderLessonTitle',
        'lessonTitle': '53otro3',
        'otherInfo': 'asfsadsdf',
        'activityObj': {}
    }
];
    

// Update database from array of activities 
export default function lessonActivitiesDb() {
    activitiesArray.forEach((activityObj)=>{


const DBLessonsRef = db.collection('lessons').doc(activityObj.activityId)
DBLessonsRef.set(activityObj
, { merge: true })
.then(function() {
    console.log("Lessons added to db.");
})
.catch(function(error) {
    console.error("Error adding lesson to db: ", error);
});
})

}