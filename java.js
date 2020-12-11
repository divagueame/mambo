import missingWordSentencesExercise from './missingWordSentencesExercise.js';
import generateSidenav from './generateSidenav.js';
import generateFooter from './generateFooter.js';
import generateBlockquote from './generateBlockquote.js';
import introConcept from './introConcept.js';
import videoActivity from './videoActivity.js';
import renderLessonTitle from './renderLessonTitle.js';
import examplesCard from './examplesCard.js';
import displayAvatarsToChoose from './displayAvatarsToChoose.js';
import renderUserNavBarButtons from './renderUserNavBarButtons.js';
let activeLessonId = 'adverbios' 

const lessonContainer = document.querySelector('.lessonContainer'); 
let lesson1Obj = {
    'title': 's'
};



function renderLesson(lesson1Obj){

// renderLessonTitle(lessonContainer);
// generateBlockquote(lessonContainer)
// examplesCard(lessonContainer);
// introConcept(lessonContainer);
// videoActivity(lessonContainer)
// missingWordSentencesExercise(lessonContainer, exerciseSentences);
generateFooter(lessonContainer);
}



document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {
        inDuration: 100,
        opacity: .551, 
        dismissible: false,
        preventScrolling: true
    });

  });




document.addEventListener('DOMContentLoaded', function() {

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
    console.log("User has signed out")
});



document.addEventListener('DOMContentLoaded', (e)=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
        
        db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
            
            if(!doc.exists){
                console.log("User has no initial settings")
                displayAvatarsToChoose();
                renderUserNavBarButtons()

            } else {
                console.log("User already has settings")
                renderUserNavBarButtons()

            }
            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("none");
            })
            console.log("You're logged in now");

            initModules()
        })




        } else {
            console.log("You're NOT logged in");
            document.querySelector('#navBarbuttons').innerHTML = ``
            
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("none");
            })
        // No user is signed in.
        }
    });    generateSidenav()
});

function initModules(){
    generateSidenav()
    renderLesson(activeLessonId);

}


let exerciseSentences = [
    {
        text: "El gato de mi madre es muy bonito.",
        hiddenWord: "es",
        labelText: "verbo ser",
        helperText: "My mother's cat is very beautiful."
    },
    {
        text: "El padre come muchas galletas.",
        hiddenWord: "come",
        labelText: "verbo comer",
        helperText: "The father eats many cookies."
    },
    {
        text: "El profesor canta muy bien.",
        hiddenWord: "canta",
        labelText: "verbo cantar",
        helperText: "The teacher sings very well."
    },
    {
        text: "El perro corre muy rapido.",
        hiddenWord: "corre",
        labelText: "verbo correr",
        helperText: "The dog runs very fast."
    }
]




export {activeLessonId, db};
