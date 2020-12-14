
// import activitiesModule from './modules/activitiesModule.js'
import renderLesson from './renderLesson.js';
import displayAvatarsToChoose from './displayAvatarsToChoose.js';
// import renderUserNavBarButtons from './renderUserNavBarButtons.js';
// import lessonActivitiesDb from './lessonActivitiesDb.js';
let activeLessonId = 'adverbios' 
const lessonContainer = document.querySelector(".lessonContainer")
 
// setTimeout(lessonActivitiesDb,3000)


  
  
 
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


// Log out
const signOutButton = document.querySelector("#signOutButton");
signOutButton.addEventListener('click', function(){
    auth.signOut();
    console.log("User has signed out");
    lessonContainer.innerHTML =``
});


//Authentication state listener
document.addEventListener('DOMContentLoaded', (e)=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
        
        db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
            
            renderLesson(1,1);
            // activitiesModule.displayHeader(lessonContainer,3);
            // renderUserNavBarButtons()
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




export {activeLessonId, db};
