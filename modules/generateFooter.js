import {activeLessonId, db} from '../java.js';
import renderLesson from '../renderLesson.js';

import generateSidenav from './generateSidenav.js';
export default function generateFooter() {
    //THIS MODULE TAKES NO ARGUMENTS
    let targetDomDefault = document.querySelector('.lessonContainer');
    // if(targetDom){
    //     targetDomDefault = document.querySelector(targetDom);
    // }
    
// Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");

    (function isTheLastLessonOfCurrentLevel(){
        db.collection('lessons')
        .where('level','==',activeLessonId[0])
        .where('lessonNumber','>',activeLessonId[1])
        .get()
        .then(doc=>{

            //IF THIS LEVEL IS COMPLETED, DO NOT SHOW NEXT LESSON BTN
            let nextBtn = document.querySelector("#nextBtn");
            // nextBtn.innerHTML = ``
            
            doc.forEach((e)=>{
                // THE LEVEL IS NOT COMPLETED
                nextBtn.innerHTML = `<a class="btn-floating white  waves-effect waves-light waves-teal" data-position="top" data-tooltip="Siguiente"><i class="material-icons black-text">chevron_right</i></a>`
                
                if(e){
                    // console.log("SI", e.data())
                }else{
                    // console.log("NO", e.data())
                }
            })
            

        })
})()

let userId =  firebase.auth().currentUser.uid;
let thisColor1 = 'orange lighten-2';
let pulse1 = 'pulse';
let tooltipText1 = 'Marca la leccion como completada!';
let iconAssignment1 = 'border_color';

let thisColor2 = 'green lighten-2';
let pulse2 = '';
let tooltipText2 = '';
let iconAssignment2 = 'assignment_turned_in';

let basicHtmlFooter = `<div class="row">
<div class="col s2 offset-s3 center">
    <a href="#"  class="btn-floating white waves-effect waves-light sidenav-trigger btn" data-target="slide-out" ><i class="material-icons black-text">library_books</i></a>
</div>  

<div class="col s2 center" id="taskUpdateBtn">
    
</div><div class="col s2 center" id="nextBtn"></div>`

moduleDiv.innerHTML = basicHtmlFooter;

targetDomDefault.appendChild(moduleDiv);

const taskUpdateBtn = document.querySelector("#taskUpdateBtn");


//READ INITIAL USER STATE AND SET INITIAL BUTTON IMAGE
db.collection('users').doc(userId)
.get().then((doc)=>{
    if(doc.exists){
        let userCompletedLessons = Object.keys(doc.data());
        let userCompletedLessonsTrueFalse = Object.values(doc.data());
        // console.log("PUN ",userCompletedLessons, userCompletedLessonsTrueFalse);
        for(let i=0;i<userCompletedLessons.length;i++){
            if(((activeLessonId[0]+"."+activeLessonId[1])==userCompletedLessons[i])&&(userCompletedLessonsTrueFalse[i]==true)){
                // console.log("FOUND BITCH! ");
                 toggleButtonImg()
            }else {
                toggleButtonImg()
                toggleButtonImg()
            }
        };
    }
}) 

// Listen to clicks to update current status
taskUpdateBtn.addEventListener('click', function(){
    
    const userDBLessonsRef = db.collection('users').doc(userId);
    userDBLessonsRef.get().then((doc)=>{
        console.log("YESSS")
        if(!doc.exists){
            dbMarkActiveLessonAsCompleted();
            toggleButtonImg()
        } else {
            let activeRef = activeLessonId[0] + "." + activeLessonId[1];
        
            if(doc.data()[activeRef]==true){
                //It's true and stored in database
                dbMarkActiveLessonAsNotcompleted();
                toggleButtonImg()
    
            } else if(doc.data()[activeRef]==false) {
                //
                dbMarkActiveLessonAsCompleted();
                toggleButtonImg()
            } else {
                //It's undefined
                dbMarkActiveLessonAsCompleted();
                toggleButtonImg()
            }
        }
        generateSidenav()
    }
)
}
)


//Next button functionality. Read current lesson and render next one
nextBtn.addEventListener('click',function(){
    console.log("NEXT")
    db.collection('lessons')
    .where('level','==',activeLessonId[0])
    .where('lessonNumber','>',activeLessonId[1])
    .orderBy('lessonNumber','asc')
    .limit(1)
    .get()
    .then(doc=>{
        doc.forEach(element => {
            if(element){
                renderLesson(element.data().level,element.data().lessonNumber);
            }     
        });
    })
})
    

function toggleButtonImg(){
    if(taskUpdateBtn.classList.contains('completedButton')){
        // console.log("ES COMPLETED BUTTOn");
        taskUpdateBtn.innerHTML = `<a class="btn btn-floating ${thisColor1} waves-effect waves-light accent-bigger ${pulse1}" data-position="bottom" data-tooltip="${tooltipText1}"><i class="material-icons black-text ">${iconAssignment1}</i></a>`
        taskUpdateBtn.classList.toggle('completedButton');
    } else {
        // console.log("NO ES COMPLETED BUTTOn");
        taskUpdateBtn.innerHTML =`<a class="btn btn-floating ${thisColor2} waves-effect waves-light accent-bigger ${pulse2}" data-position="bottom" data-tooltip="${tooltipText2}"><i class="material-icons black-text ">${iconAssignment2}</i></a>`
        taskUpdateBtn.classList.toggle('completedButton');
    }
}

// DB FUNCTIONS TO CHECK LESSON STATUS AND TOGGLE IT
function dbMarkActiveLessonAsNotcompleted(){
    let userId =  firebase.auth().currentUser.uid;
    let thisLevel = activeLessonId[0];
    let thisLesson = activeLessonId[1];
    let lessonRef = "" + thisLevel + "." + thisLesson;


    const usersDBLessonsRef = db.collection('users').doc(userId);
    usersDBLessonsRef.set({
    [lessonRef]:false
    }, {merge: true})
    .then(() => console.log("Document deleted")) // Document deleted
    .catch((error) => console.error("Error deleting document", error));
}

function dbMarkActiveLessonAsCompleted(){
    let userId =  firebase.auth().currentUser.uid;
    let thisLevel = activeLessonId[0];
    let thisLesson = activeLessonId[1];
    let lessonRef = "" + thisLevel + "." + thisLesson;

    const usersDBLessonsRef = db.collection('users').doc(userId);
    usersDBLessonsRef.set({
    [lessonRef]: true
    }, {merge: true})
    .then(function() {
    // console.log("Document written with ID: ");
    })
    .catch(function(error) {
    console.error("POLError adding document: ", error);
    });
    }

}
