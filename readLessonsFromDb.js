
import {db} from './java.js';


// Update database from array of activities 
export default async function readLessonsFromDb(level,lessonNumber) {

    let returnedLessons = [","];

console.log("Read lesson activies init")
    const DBLessonsRef = db.collection('lessons');
    let lessons = DBLessonsRef
    .where("level","==",level)
    .where("lessonNumber", "==", lessonNumber)
    .get()
    .then(snap => { 
        let thisLesson
        snap.forEach(lesson => {  
            thisLesson = (lesson.data())
        });
        return thisLesson
     })
.catch(function(error) {
    console.error("Error finding that lesson on the db: ", error);
});

return lessons

}

