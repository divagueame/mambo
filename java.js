
// import activitiesModule from './modules/activitiesModule.js'
import renderLesson from './renderLesson.js';
import displayAvatarsToChoose from './displayAvatarsToChoose.js';
import renderUserNavBarButtons from './renderUserNavBarButtons.js';
import lessonActivitiesDb from './lessonActivitiesDb.js';
import generateSideNav from './modules/generateSidenav.js';
let activeLessonId = [1,1];
const lessonContainer = document.querySelector(".lessonContainer")
 
// setTimeout(lessonActivitiesDb,800)

// setInterval(function(){
//     console.log(activeLessonId)
// },8000)
  
  function renderInitialPage(){
    // const lessonContainer = document.querySelector('.lessonContainer'); 
    
    lessonContainer.innerHTML = '';
    let html = `
        <h1 class="center">Mambo!</h1>
        
        <div class="row center">
            <div class="col s4">
                <div>POLLAS</div>
                <div class="initButton scale-transition scale-out btn-floating btn-large white">POS</div>
            </div>
            <div class="col s4">
                <div>POLLAS</div>
                <div class="initButton scale-transition  scale-out btn-floating btn-large white">POS</div>
            </div>
            <div class="col s4">
                <div>POLLAS</div>
                <div class="initButton scale-transition  scale-out  btn-floating btn-large white">POS</div>    
            </div>
        </div>
    `
    lessonContainer.innerHTML = html;
    showLastUpdates()

function showLastUpdates(){
    let html = `
    <ul class="collection">
    <li class="collection-item avatar">
      <img src="images/yuna.jpg" alt="" class="circle">
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">insert_chart</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle red">play_arrow</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
  </ul>
  `

  lessonContainer.innerHTML += html

}



    function toggleScaleTransition(selector){
        let selec = `.${selector}`
        let initButtons = document.querySelectorAll(selec);
        let initTime = 200;
        initButtons.forEach((e)=>{
            setTimeout(() => {
                e.classList.toggle("scale-in");
                e.classList.toggle("scale-out")
            }, initTime);
            initTime += 100;
            console.log("TRIGGER",e)
        })
    }
    
  
        toggleScaleTransition('initButton')
  

  }
 
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
    firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
        // User is signed in.
        
        db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
            // renderLesson(activeLessonId[0],activeLessonId[1]);
            renderInitialPage()
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
