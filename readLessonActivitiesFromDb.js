
import {db} from './java.js';


// Update database from array of activities 
export default async function readLessonActivitiesFromDb(level,lessonNumber) {

    let returnedLessons = [];

console.log("Read lesson activies init")
    const DBLessonsRef = db.collection('lessons');
    let lessons = DBLessonsRef
    .where("level","==",level)
    .where("lessonNumber","==",lessonNumber)
    .get()
    .then(snap => { 
        snap.forEach(doc => { 
            let obj = doc.data();
            returnedLessons.push(obj);
        }); 
        // console.log('returnedLessons,', returnedLessons);

        return returnedLessons
     }).then((a)=>{
         return a
     })
.catch(function(error) {
    console.error("Error adding lesson to db: ", error);
});

return lessons

}

