import {activeLessonId, db} from './java.js';

export default function generateFooter() {
console.log("Footer generate init");
const footerContainer = document.querySelector("#footerContainer");

let userId =  firebase.auth().currentUser.uid;

let thisColor1 = 'orange lighten-2';
let pulse1 = 'pulse';
let tooltipText1 = 'Marca la leccion como completada!';
let iconAssignment1 = 'border_color';

let thisColor2 = 'green lighten-2';
let pulse2 = '';
let tooltipText2 = 'Bien! Ya has completado esta leccion';
let iconAssignment2 = 'assignment_turned_in';

let basicHtmlFooter = `
<div class="row">
<div class="col s2 offset-s3 center">
    <a class="btn-floating white waves-effect waves-light"><i class="material-icons black-text">chevron_left</i></a>
</div>  

<div class="col s2 center" id="taskUpdateBtn">
<a class="btn tooltipped btn-floating ${thisColor1} waves-effect waves-light accent-bigger ${pulse1}" data-position="bottom" data-tooltip="${tooltipText1}"><i class="material-icons black-text ">${iconAssignment1}</i></a>
</div>

<div class="col s2 center">
<a class="btn-floating white  waves-effect waves-light waves-teal" data-position="top" data-tooltip="Siguiente"><i class="material-icons black-text">chevron_right</i></a>
</div>  
`
footerContainer.innerHTML = basicHtmlFooter;
const taskUpdateBtn = document.querySelector("#taskUpdateBtn");


//READ INITIAL USER STATE AND SET INITIAL BUTTON IMAGE
const userDBLessonsRef = db.collection('users').doc(userId)
.collection("completedLessons").doc(activeLessonId);
userDBLessonsRef.get().then((doc)=>{
    if((!doc.exists)) {
        //Do not change the initial button
        // console.log("This lesson is NOT completed by the user.",doc.data());
} else{
    //Change the initial button
        // console.log("This lesson is completed by the user.",doc.data());
        toggleButtonImg()
    }
}) 


// Listen to clicks to update current status
taskUpdateBtn.addEventListener('click', function(){

const userDBLessonsRef = db.collection('users').doc(userId)
.collection("completedLessons").doc(activeLessonId);
userDBLessonsRef.get().then((doc)=>{
    if((!doc.exists)) {
        console.log("This lesson is NOT completed by the user.",doc.data());
        dbMarkActiveLessonAsCompleted();
        toggleButtonImg()
        var elems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems, {});

} else{
        console.log("This lesson is completed by the user.",doc.data());

            dbMarkActiveLessonAsNotcompleted();
            toggleButtonImg()

        // var elems = document.querySelectorAll('.tooltipped');
        // M.Tooltip.init(elems, {});
    }
}) 





})





    

function toggleButtonImg(){
    if(taskUpdateBtn.classList.contains('completedButton')){
        console.log("ES COMPLETED BUTTOn");
        taskUpdateBtn.innerHTML = `<a class="btn tooltipped btn-floating ${thisColor1} waves-effect waves-light accent-bigger ${pulse1}" data-position="bottom" data-tooltip="${tooltipText1}"><i class="material-icons black-text ">${iconAssignment1}</i></a>`
        taskUpdateBtn.classList.toggle('completedButton');
    } else {
        console.log("NO ES COMPLETED BUTTOn");
        taskUpdateBtn.innerHTML =`<a class="btn tooltipped btn-floating ${thisColor2} waves-effect waves-light accent-bigger ${pulse2}" data-position="bottom" data-tooltip="${tooltipText2}"><i class="material-icons black-text ">${iconAssignment2}</i></a>`
        taskUpdateBtn.classList.toggle('completedButton');
    }
}



    


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

const usersDBLessonsRef = db.collection('users').doc(userId);
usersDBLessonsRef.collection("completedLessons").doc(activeLessonId).set({[activeLessonId]: true}, { merge: true })
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
        console.log("A",doc.data())
        if((!doc.exists)) {console.log("This lesson is NOT completed by the user.",doc.data())
        return true } else{
            console.log("This lesson is completed by the user.",doc.data()
            )
            return false
        }
    }) 
}

}