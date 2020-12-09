import {activeLessonId, db} from './java.js';

export default function generateFooter() {
console.log("Footer generate init");





function updateLessonsStatusLogo(){
    const taskUpdateBtn = document.querySelector("#taskUpdateBtn");
    taskUpdateBtn.innerHTML = `
    <a class="btn-floating orange lighten-2 waves-effect waves-light tooltipped accent-bigger ${pulse}" data-position="top" data-tooltip="${tipText}"><i class="material-icons black-text ">${iconAssignment}</i></a>`
}


const footerContainer = document.querySelector("#footerContainer");

let taskIsDone = false;
let iconAssignment = 'assignment_turned_in';
let pulse = ''
let tipText = 'Buen trabajo'
if(taskIsDone!=true){
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
</div>


<div class="col s2 center">
<a class="btn-floating white  waves-effect waves-light waves-teal tooltipped" data-position="top" data-tooltip="Siguiente"><i class="material-icons black-text">chevron_right</i></a>
</div>  
`
    footerContainer.innerHTML = html;

    const taskUpdateBtn = document.querySelector("#taskUpdateBtn");
    taskUpdateBtn.addEventListener('click', updateLessonsStatusLogo)
    updateLessonsStatusLogo();




    function dbMarkLessonAsCompleted(){
        let userId =  firebase.auth().currentUser.uid;
db.collection("users").doc(userId).set({
    [activeLessonId]: true,
})
.then(function() {
    console.log("Document written with ID: ");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


    }

    dbMarkLessonAsCompleted()



}