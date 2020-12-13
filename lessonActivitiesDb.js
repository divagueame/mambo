import {db} from './java.js';
console.log("Add lesson activies init")
let activitiesArray = [
    {
        'level': 1,
        'lessonNumber': 1,
        'lessonId': '1.1 asd Masculino o femenino',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'asdfsdano',
        'otherInfo': 'asfsadf'
    },    {
        'level': 1,
        'lessonNumber': 1,
        'lessonId': '2.223 vsdferbos',
        'activityModuleType': 'introConcept',
        'titleText': 'titulo nuevo',
        'otherInfo': 'asfsadf'
    },    {
        'level': 1,
        'lessonNumber': 1,
        'lessonId': '3.1 Msasdf1234sculino o femsdenino',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'es un text',
        'otherInfo': 'asfsadf'
    },    {
        'level': 2,
        'lessonNumber': 2,
        'lessonId': '4.1 ad23423verbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf'
    },
    {
        'level': 2,
        'lessonNumber': 2,
        'lessonId': '4.1 advexfgsfdrbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf'
    },
    {
        'level': 2,
        'lessonNumber': 2,
        'lessonId': '4.1 adv1234123erbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf'
    },
    {
        'level': 3,
        'lessonNumber': 1,
        'lessonId': '4.3451 adverbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf'
    },
    {
        'level': 3,
        'lessonNumber': 2,
        'lessonId': '4.1 ad2345verbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf'
    },
    {
        'level': 3,
        'lessonNumber': 3,
        'lessonId': 'sd4.1 adve2345rbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf',
        'linkexample' : [12312312, 12312321],
        'numberCode': 23423423
    },
    {
        'level': 1,
        'lessonNumber': 6,
        'lessonId': '4.asdf1 adve2345rbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf',
        'linkexample' : [12312312, 12312321],
        'numberCode': 23423423
    },
];
    

// Update database from array of activities 
export default function lessonActivitiesDb() {
    activitiesArray.forEach((activityObj)=>{


const DBLessonsRef = db.collection('lessons').doc(activityObj.lessonId)
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


