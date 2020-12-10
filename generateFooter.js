import {activeLessonId, db} from './java.js';

export default function generateFooter() {
console.log("Footer generate init");
const footerContainer = document.querySelector("#footerContainer");
let iconAssignment = 'assignment_turned_in';
let pulse = ''
let tipText = 'Buen trabajo'
if(!isCurrentLessonCompleted()){
  iconAssignment = "border_color";
    pulse = 'pulse';
    tipText = 'Marcar como leccion completada'
}

let html = `
<div class="row">
<div class="col s2 offset-s3 center">
<a class="btn-floating white waves-effect waves-light"><i class="material-icons black-text">chevron_left</i></a>
</div>  

<div class="col s2 center" id="taskUpdateBtn">
    <a class="btn-floating orange lighten-2 waves-effect waves-light tooltipped accent-bigger ${pulse}" data-position="top" data-tooltip="${tipText}"><i class="material-icons black-text ">${iconAssignment}</i></a>
</div>


<div class="col s2 center">
<a class="btn-floating white  waves-effect waves-light waves-teal tooltipped" data-position="top" data-tooltip="Siguiente"><i class="material-icons black-text">chevron_right</i></a>
</div>  
`
    footerContainer.innerHTML = html;

    


// DB FUNCTIONS TO CHECK LESSON STATUS AND TOGGLE IT

function dbMarkActiveLessonAsNotcompleted(){
    let userId =  firebase.auth().currentUser.uid;
    let collectionName = "completedLessons";
    const usersDBLessonsRef = db.collection('users').doc(userId)
    .collection(collectionName).doc(activeLessonId)
  .delete()
  .then(() => console.log("Document deleted")) // Document deleted
  .catch((error) => console.error("Error deleting document", error));
}

    function dbMarkActiveLessonAsCompleted(){
        let userId =  firebase.auth().currentUser.uid;
        let collectionName = "completedLessons";
        const usersDBLessonsRef = db.collection('users').doc(userId);
        usersDBLessonsRef.collection(collectionName).doc(activeLessonId).set({[activeLessonId]: true}, { merge: true })
.then(function() {
    console.log("Document written with ID: ");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
    }

function isCurrentLessonCompleted(){
    let userId =  firebase.auth().currentUser.uid;
    const userDBLessonsRef = db.collection('users').doc(userId)
    .collection("completedLessons").doc(activeLessonId);
    userDBLessonsRef.get().then((doc)=>{
        if((!doc.exists)) {return true }else{
            console.log("This lesson is completed by the user.",doc.data())
            return false
        }
    }) 
}

}