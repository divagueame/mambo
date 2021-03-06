
// import activitiesModule from './modules/activitiesModule.js'
import renderLesson from './renderLesson.js';
import renderInitialPage from './renderInitialPage.js'
import displayAvatarsToChoose from './displayAvatarsToChoose.js';
import renderUserNavBarButtons from './renderUserNavBarButtons.js';
import lessonActivitiesDb from './lessonActivitiesDb.js';
import generateSideNav from './modules/generateSidenav.js';
import activitiesModule from './modules/activitiesModule.js';
import generateFrecuencyList from './generateFrecuencyList.js';


let activeLessonId = [3,1];
const lessonContainer = document.querySelector(".lessonContainer")
 
setTimeout(lessonActivitiesDb,  800)



  
 
//Materializa init
document.addEventListener('DOMContentLoaded', function() {

          
      
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {
        inDuration: 100,
        opacity: .551, 
        dismissible: false,
        preventScrolling: true
    });

    var myNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(myNav, {
        draggable: true
    });

    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    var collapsibleElem = document.querySelector('.collapsible');
    M.Collapsible.init(collapsibleElem, {});
        
    }
    )
    
const auth = firebase.auth();
const db = firebase.firestore();
 

// Enter as guest
let enterAsGuestBtn = document.getElementById('enterAsGuestBtn');
enterAsGuestBtn.addEventListener('click', function(){
    firebase.auth().signInAnonymously()
  .then(() => {
  console.log("You have logged in as guest! ")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
    

})
// Sign up form
const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    auth.createUserWithEmailAndPassword(email,password).then((user)=>{
        console.log("You are in!",user)

    }).catch((error)=>{
        // console.log(error.code, error.message);
        if(error.code=="auth/email-already-in-use"){
            auth.signInWithEmailAndPassword(email,password).then((user)=>{
                console.log("You already have and account and are in!",user)
            }).catch((error)=>{
                console.log(error.message);
            })
        }
    })
});


//Authentication state listener
document.addEventListener('DOMContentLoaded', (e)=>{
    firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
        // User is signed in.
        document.getElementById('navBar').classList.remove('hide')
        db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
            renderLesson(activeLessonId[0],activeLessonId[1]);
            // renderInitialPage()
            // generateFrecuencyList()
            
            renderUserNavBarButtons();
            generateSideNav();

            if(!doc.exists){
                console.log("User has no initial settings")
                displayAvatarsToChoose();

            } else {
                console.log("User already has settings")
                
            }
            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("none");
            })
            console.log("You're logged in now");


        })

        } else {
            console.log("You're NOT logged in");
            document.querySelector('#navBarbuttons').innerHTML = ``;
            document.getElementById('navBar').classList.add('hide')

            document.querySelector('#slide-out').innerHTML = ``;

            
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("none");
            })
        // No user is signed in.
        lessonContainer.innerHTML =``
        }
    });   

});




export {activeLessonId, db, auth};
