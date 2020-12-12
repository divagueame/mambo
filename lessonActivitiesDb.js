import {db} from './java.js';
console.log("Add lesson activies init")
let activitiesArray = [
    {
        'lessonId': '12.1 Masculino o femenino',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'asdfsdano',
        'otherInfo': 'asfsadf'
    },    {
        'lessonId': '1.223 verbos',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'titulo nuevo',
        'otherInfo': 'asfsadf'
    },    {
        'lessonId': '1.3 abjetivos',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'es un text',
        'otherInfo': 'asfsadf'
    },    {
        'lessonId': '3.1 adverbios',
        'activityModuleType': 'renderLessonTitle',
        'titleText': 'otro',
        'otherInfo': 'asfsadf'
    }];



// Update database from array of activities 
export default function lessonActivitiesDb() {
    const DBLessonsRef = db.collection('lessons').doc('activitiesArray');

    activitiesArray.forEach((activity)=>{
        console.log(activity.lessonId);


// .collection("other").doc("asdf")
DBLessonsRef.set(
    {[activity.lessonId]: activity}
    , { merge: true })
.then(function() {
    console.log("Lessons added to db.");
})
.catch(function(error) {
    console.error("Error adding lesson to db: ", error);
});






    })





}

