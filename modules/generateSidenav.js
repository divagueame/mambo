import {db,activeLessonId} from '../java.js'; 
import renderLesson from '../renderLesson.js';
    
export default function generateSideNav() {

const slideOut = document.querySelector("#slide-out");



//Read headings from db and check how many levels
const sideInfo = db.collection("lessons").orderBy("level").orderBy("lessonNumber").get().then((snap)=>{
    let levels = 1;
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

    lessons.forEach(function(lesson,i,array){
        let selector = '';
        selector = '.levelHeader' + lesson.level;
        selector = document.querySelector(selector);

        let linkId = `sideBarLink${lesson.level}-${lesson.lessonNumber}`
        var html = `
        <li><a href="#!" class="${linkId}"><span class="valign-wrapper"><i class="material-icons tiny">chevron_right</i><i class="material-icons green-text tiny lessonCompletedMark"></i> ${lesson.lessonTitle}  </span></div></a></li>`;
        selector.innerHTML += html;
        
    })

    lessons.forEach((lesson)=>{
        let linkId = "sideBarLink" + lesson.level + "-" + lesson.lessonNumber ;
        document.querySelector(`.${linkId}`).addEventListener('click', function(e){
            e.preventDefault();
            renderLesson(lesson.level,lesson.lessonNumber)})
        });

        getUserCompletedLessons()
}

function getUserCompletedLessons(){
    let returnedArray = [];
    let userId =  firebase.auth().currentUser.uid;
    db.collection('users').doc(userId).get().then((doc)=>{
        if(doc.exists){
            let userData =  Object.entries(doc.data());
            userData.forEach((e)=>{
                if(e[1]==true){ returnedArray.push(e[0]) }
            })
        }
    returnedArray = returnedArray.map((e)=>{
        e = e.replace(/\./,'-')
        return "sideBarLink" + "" + e 
    })
    // console.log("AS ",returnedArray);
    // if(returnedArray.length>0){
        returnedArray.forEach((e)=>{
            let selector = `.${e}`
            
                let selectThis = document.querySelector(selector)
                if(selectThis!=null){    
                selectThis.getElementsByTagName("i");
                selectThis = Array.from(selectThis);
                selectThis.forEach((e)=>{
                    if(e.classList.contains("lessonCompletedMark")){
                        // e.innerHTML = "assignment_turned_in";
                        e.innerHTML = "check"
                    } else {
                        e.innerHTML = ""
                    }
                    
                })
            }

        })
    // }


    })

    return returnedArray
}


}

