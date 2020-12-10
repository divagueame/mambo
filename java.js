import missingWordSentencesExercise from './missingWordSentencesExercise.js';
import generateSidenav from './generateSidenav.js';
import generateFooter from './generateFooter.js';
import introConcept from './introConcept.js';
import videoActivity from './videoActivity.js';
import examplesCard from './examplesCard.js';
let activeLessonId = 'Verbos' 

const exerciseContainer = document.querySelector("#exerciseContainer");
const videoActivityContainer = document.querySelector(".videoActivityContainer");

function displayAvatarsToChoose(){


    let avatars = ''

    for(let i=0;i<12;i++){
        console.log(i+1)

        avatars += `
        <div class="col s2">
        <img class="responsive-img" src="./img/avatars/${i+1}.png">
        </div>`

    }

const avatarsModal = document.querySelector(".avatarsModal");

let html = `

<div id="avatarsModal" class="modal">
  <div class="modal-content">
    <h5>Bienvenido a Mambo Spanish</h5>

<div class="row">
${avatars}

</div>


`





let html1 = `

<div id="avatarsModal" class="modal">
  <div class="modal-content">
    <h4>Bienvenido a Mambo Spanish</h4>


<div class="row">
<div class="col s2 offset-s2">
  <img class="responsive-img" src="./img/avatars/1.png">
</div>
<div class="col s2">
  <img class="responsive-img" src="./img/avatars/2.png">
</div>
<div class="col s2">
<img class="responsive-img" src="./img/avatars/3.png">
</div>
<div class="col s2">
<img class="responsive-img" src="./img/avatars/4.png">
</div>
</div>
<div class="row">
<div class="col s2 offset-s2">
  <img class="responsive-img" src="./img/avatars/5.png">
</div>
<div class="col s2">
  <img class="responsive-img" src="./img/avatars/6.png">
</div>
<div class="col s2">
<img class="responsive-img" src="./img/avatars/7.png">
</div>
<div class="col s2">
<img class="responsive-img" src="./img/avatars/8.png">
</div>
</div>
<div class="row">
<div class="col s2 offset-s2">
  <img class="responsive-img" src="./img/avatars/9.png">
</div>
<div class="col s2">
  <img class="responsive-img" src="./img/avatars/10.png">
</div>
<div class="col s2">
<img class="responsive-img" src="./img/avatars/11.png">
</div>
<div class="col s2">
<img class="responsive-img" src="./img/avatars/12.png">
</div>
</div>

  </div>


`


html += `

<form class="row">
  <div class="col col s4 offset-s4">
    <div class="input-field">
      <i class="material-icons prefix">account_circle</i>
      <input id="icon_prefix" type="text" class="validate">
      <label for="icon_prefix">Tu nombre</label>
    </div>
  </div>
</form>
    <div class="btn">Listo</div>

</div>
    `
avatarsModal.innerHTML = html
}

displayAvatarsToChoose();








document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
        inDuration: 100,
        opacity: .551, 
        dismissible: false,
        preventScrolling: true
    });
    let elem = document.querySelector("#avatarsModal")
    var instance = M.Modal.getInstance(elem);
    instance.open();
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
            console.log("You're logged in")
            initModules()


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


function initModules(){
    // examplesCard(exerciseContainer);
    generateSidenav()
    generateFooter()
// introConcept(exerciseContainer);
// videoActivity(videoActivityContainer)
// missingWordSentencesExercise(exerciseContainer, exerciseSentences);
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
