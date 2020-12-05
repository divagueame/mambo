const auth = firebase.auth();
const db = firebase.firestore();

function getUserId(){
    firebase.auth().currentUser;
}


//Sign up form
const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    auth.createUserWithEmailAndPassword(email,password).then((user)=>{
        console.log("You are in!",user)
    }).catch((error)=>{
        // console.log(error.code);
        console.log(error.message);
        if(error.code=="auth/email-already-in-use"){
            auth.signInWithEmailAndPassword(email,password).then((user)=>{
                console.log("You already have and account and are in!",user)
            }).catch((error)=>{
                console.log(error.message);
            })
        }
    })
});



//Log out
const signOutButton = document.querySelector("#signOutButton");
signOutButton.addEventListener('click', function(){
    auth.signOut();
    console.log("User has signed out")
})




// On load, check if the user is logged in
document.addEventListener('DOMContentLoaded', (e)=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
        } else {
        // No user is signed in.
        }
    });
  

});


