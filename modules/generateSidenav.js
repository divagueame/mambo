import {db,activeLessonId} from '../java.js';

function getActiveLessonId(){
    let stringedId = "" +  activeLessonId[0] + "." +  activeLessonId[1];
    return stringedId
}


function isCurrentLessonCompleted(){
    let userId =  firebase.auth().currentUser;
    console.log(userId)
    
    
// let currentId = getActiveLessonId()

//     const userDBLessonsRef = db.collection('users').doc(userId)
//     .collection("completedLessons").doc(currentId);
//     userDBLessonsRef.get().then((doc)=>{
//         console.log("A",doc.data())
//         if((!doc.exists)) {console.log("This lesson is NOT completed by the user.",doc.data())
//         return true } else{
//             console.log("This lesson is completed by the user.",doc.data()
//             )
//             return false
//         }
//     }) 
}

console.log(isCurrentLessonCompleted(), 'CUR');

export default function generateSideNav() {
    console.log("YES")
const slideOut = document.querySelector("#slide-out");

let levels = 1;

//Read headings from db and check how many levels
const sideInfo = db.collection("lessons").orderBy("level").orderBy("lessonNumber").get().then((snap)=>{
    snap.forEach((activity)=>{
        if(activity.data().level>levels){
            levels= activity.data().level
        }
    });
    //Deploy headers    
    deployLevelHeaders(levels);
    let lessons = []
    snap.forEach((activity)=>{
        lessons.push(activity.data())
    })

    deployLessonsInsideHeaders(lessons)



})


    
    function deployLevelHeaders(levels){
        let html = ``
        for(let i =0;levels>i;i++){
            
            let  levelSelector =  'levelHeader' + (1+i);
            let divider = '<div class="divider">';
                if(i+1==levels){
                    divider = ''
                }

            let levelHeader = `
            <li>
                <div class="collapsible-header red lighten-5">
                    <i class="material-icons">filter_drama</i>
                    Nivel ${i+1}
                </div>
            <div class="collapsible-body  ${levelSelector}"></div>
            ${divider}
            </li>`;
            html += levelHeader;
        }
        slideOut.innerHTML = html;
    };


function deployLessonsInsideHeaders(lessons){
// console.log("Deploying sidebar lessons")
    lessons.forEach(function(item,i,array){
        let selector = '';
        let title = '';
        if(item.activityOrder==1){
            // console.log("  ")
            // console.log("level", item.level);
            // console.log("Lesson number", item.lessonNumber);
            // console.log("Lesson title", item.lessonTitle);

        selector = '.levelHeader' + item.level;
        selector = document.querySelector(selector);
        // console.log(selector)
        
        title = item.lessonTitle;
        // console.log(title)
        var html = `
        <li><a href="#!"> <span class="valign-wrapper"><i class="material-icons tiny">chevron_right</i>${item.lessonTitle}</span></div></a></li>`;
        selector.innerHTML += html;
        }
    
    })
}

    

}

