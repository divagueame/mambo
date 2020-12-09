import missingWordSentencesExercise from './missingWordSentencesExercise.js';
import generateSidenav from './generateSidenav.js';
import generateFooter from './generateFooter.js';
import introConcept from './introConcept.js';
import videoActivity from './videoActivity.js';
import examplesCard from './examplesCard.js';
let activeLessonId = 'lesson1.1Sustantivos'


const exerciseContainer = document.querySelector("#exerciseContainer");
const videoActivityContainer = document.querySelector(".videoActivityContainer");


document.addEventListener('DOMContentLoaded', function() {

    generateSidenav();
// examplesCard(exerciseContainer)


}
)

document.addEventListener('DOMContentLoaded', function() {
    var myNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(myNav, {
        draggable: true
    });
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    var collapsibleElem = document.querySelector('.collapsible');
    M.Collapsible.init(collapsibleElem, {});
  });
   
const auth = firebase.auth();
const db = firebase.firestore();



function getUserId(){
    return firebase.auth().currentUser
}

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
})


// On load, check if the user is logged in;
document.addEventListener('DOMContentLoaded', (e)=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("none");
            })
            // console.log("You're logged in")

    generateFooter();

            

        } else {
            console.log("You're NOT logged in");
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("none");
            })
        // No user is signed in.
        }
    });
});



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


// introConcept(exerciseContainer);
// videoActivity(videoActivityContainer)
// missingWordSentencesExercise(exerciseContainer, exerciseSentences);


export {activeLessonId, db};
