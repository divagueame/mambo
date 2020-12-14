import {activeLessonId, updateCurrentLessonId, db} from '../java.js';
import renderLesson from '../renderLesson.js';

export default function generateFooter(targetDom) {
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    

    (function isTheLastLessonOfCurrentLevel(){
        db.collection('lessons')
        .where('level','==',activeLessonId[0])
        .where('lessonNumber','>',activeLessonId[1])
        .get()
        .then(doc=>{

            //THIS LEVEL IS COMPLETED
            let nextBtn = document.querySelector("#nextBtn");
            nextBtn.innerHTML = ``
            
            doc.forEach((e)=>{
                // THE LEVEL IS NOT COMPLETED
                nextBtn.innerHTML = `<a class="btn-floating white  waves-effect waves-light waves-teal" data-position="top" data-tooltip="Siguiente"><i class="material-icons black-text">chevron_right</i></a>`
                // console.log(e.data())
                if(e){
                    console.log("SI", e.data())
                }else{
                    console.log("NO", e.data())
                }
            })
            console.log("a")

        })
})()

function getActiveLessonId(){
    let stringedId = "" +  activeLessonId[0] + "." +  activeLessonId[1];
    return stringedId
}

let userId =  firebase.auth().currentUser.uid;
// console.log(userId)
let thisColor1 = 'orange lighten-2';
let tooltipped ='tooltipped'
let pulse1 = 'pulse';
let tooltipText1 = 'Marca la leccion como completada!';
let iconAssignment1 = 'border_color';

let thisColor2 = 'green lighten-2';
let pulse2 = '';
let tooltipText2 = '';
let iconAssignment2 = 'assignment_turned_in';

let basicHtmlFooter = `
<div class="row">
<div class="col s2 offset-s3 center">
    <a href="#"  class="btn-floating white waves-effect waves-light sidenav-trigger btn" data-target="slide-out" ><i class="material-icons black-text">library_books</i></a>
    
</div>  

<div class="col s2 center" id="taskUpdateBtn">
<a class="btn tooltipped btn-floating ${thisColor1} waves-effect waves-light accent-bigger ${pulse1}" data-position="bottom" data-tooltip="${tooltipText1}"><i class="material-icons black-text ">${iconAssignment1}</i></a>
</div>
`

let thirdButtonHtml = `
<div class="col s2 center" id="nextBtn">

</div> `

basicHtmlFooter += thirdButtonHtml;
targetDomDefault.innerHTML += basicHtmlFooter;
const taskUpdateBtn = document.querySelector("#taskUpdateBtn");


//READ INITIAL USER STATE AND SET INITIAL BUTTON IMAGE
const userDBLessonsRef = db.collection('users').doc(userId)
.collection("completedLessons").doc(getActiveLessonId());
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
.collection("completedLessons").doc(getActiveLessonId());
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
        var elems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems, {});
    }
}) 
})


//Next button functionality. Read current lesson and render next one
nextBtn.addEventListener('click',function(){
    let nextLessonFound = false;

    db.collection('lessons')
    .where('level','==',activeLessonId[0])
    .where('lessonNumber','>',activeLessonId[1])
    .orderBy('lessonNumber','asc')
    .get()
    .then(doc=>{
        let nextLesson = 0;

        doc.forEach(element => {
            // console.log("Current lesson",activeLessonId);
            
            let activityLesson = element.data().lessonNumber;
            console.log("Clicked. ", activityLesson);
            // console.log(element.data())
            if((activityLesson>activeLessonId[1])&&(nextLessonFound==false)){
                // console.log("yay", activityLesson)
                nextLesson = activityLesson;
                nextLessonFound=true;
                renderLesson(activeLessonId[0],nextLesson)
            }
            
        });
    })


})





    

function toggleButtonImg(){
    if(taskUpdateBtn.classList.contains('completedButton')){
        console.log("ES COMPLETED BUTTOn");
        taskUpdateBtn.innerHTML = `<a class="btn tooltipped btn-floating ${thisColor1} waves-effect waves-light accent-bigger ${pulse1}" data-position="bottom" data-tooltip="${tooltipText1}"><i class="material-icons black-text ">${iconAssignment1}</i></a>`
        taskUpdateBtn.classList.toggle('completedButton');
    } else {
        console.log("NO ES COMPLETED BUTTOn");
        taskUpdateBtn.innerHTML =`<a class="btn btn-floating ${thisColor2} waves-effect waves-light accent-bigger ${pulse2}" data-position="bottom" data-tooltip="${tooltipText2}"><i class="material-icons black-text ">${iconAssignment2}</i></a>`
        taskUpdateBtn.classList.toggle('completedButton');
    }
}



    


// DB FUNCTIONS TO CHECK LESSON STATUS AND TOGGLE IT

function dbMarkActiveLessonAsNotcompleted(){
    let userId =  firebase.auth().currentUser.uid;
    let currentId = getActiveLessonId()
    let collectionName = "completedLessons";
    const usersDBLessonsRef = db.collection('users').doc(userId)
    .collection(collectionName).doc(currentId)
  .delete()
  .then(() => console.log("Document deleted")) // Document deleted
  .catch((error) => console.error("Error deleting document", error));
}


function dbMarkActiveLessonAsCompleted(){
let userId =  firebase.auth().currentUser.uid;
let currentId = getActiveLessonId()
const usersDBLessonsRef = db.collection('users').doc(userId);
usersDBLessonsRef.collection("completedLessons").doc(currentId).set({[currentId]: true}, { merge: true })
.then(function() {
    console.log("Document written with ID: ");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
    }
    
function isCurrentLessonCompleted(){
    let userId =  firebase.auth().currentUser.uid;
    
let currentId = getActiveLessonId()
    const userDBLessonsRef = db.collection('users').doc(userId)
    .collection("completedLessons").doc(currentId);
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
