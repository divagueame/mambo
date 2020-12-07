import sum from './module.js'

sum(1, 2) // 3



// const auth = firebase.auth();
// const db = firebase.firestore();

function getUserId(){
    firebase.auth().currentUser;
}


//Sign up form
// const signUpForm = document.querySelector("#signup-form");
// signUpForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const email = document.querySelector("#login-email").value;
//     const password = document.querySelector("#login-password").value;
//     auth.createUserWithEmailAndPassword(email,password).then((user)=>{
//         console.log("You are in!",user)
//     }).catch((error)=>{
//         console.log(error.code, error.message);
//         if(error.code=="auth/email-already-in-use"){
//             auth.signInWithEmailAndPassword(email,password).then((user)=>{
//                 console.log("You already have and account and are in!",user)
//             }).catch((error)=>{
//                 console.log(error.message);
//             })
//         }
//     })
// });



//Log out
// const signOutButton = document.querySelector("#signOutButton");
// signOutButton.addEventListener('click', function(){
//     auth.signOut();
//     console.log("User has signed out")
// })


// On load, check if the user is logged in
//COMMENTED OUT DURING DEVELOPMENT
// document.addEventListener('DOMContentLoaded', (e)=>{
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//         // User is signed in.
//             document.querySelectorAll(".loggedIn").forEach((e)=>{
//                 e.style.display = ("block");
//             });
//             document.querySelectorAll(".loggedOut").forEach((e)=>{
//                 e.style.display = ("none");
//             })
//             console.log("You're logged in")
//         } else {
//             console.log("You're NOT logged in");
//             document.querySelectorAll(".loggedOut").forEach((e)=>{
//                 e.style.display = ("block");
//             });
//             document.querySelectorAll(".loggedIn").forEach((e)=>{
//                 e.style.display = ("none");
//             })
//         // No user is signed in.
//         }
//     });
// });


// setTimeout(function(){
//     document.querySelector("#wordForm").reset();
// document.querySelector("#missingWordInput").focus();
// },2400);



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
        labelText: "verbo cantar",
        helperText: "The dog runs very fast."
    }
]


let activeSentence = 0;
let userAnswers = [];
let userRightAnswers = [];

function exerciseInit(sentences){
    activeSentence = 0;
    const exerciseContainer = document.querySelector("#exerciseContainer");
    console.log("Active sentence: ", activeSentence);
    displayExerciseCard(sentences[activeSentence]);
};


function findPreText(sentenceObj){
    let expression = `.*${sentenceObj.hiddenWord}`
    let preText = (sentenceObj.text).match(expression);
    preText = preText[0].replace(sentenceObj.hiddenWord,"");
    return preText
}
function findPosText(sentenceObj){
    let expression = `${sentenceObj.hiddenWord}.*`;
    let posText = (sentenceObj.text).match(expression);
    posText = posText[0].replace(sentenceObj.hiddenWord,"")
    return posText
}

function displayExerciseCard(sentenceObj){
    
    let preText = findPreText(sentenceObj);
    let postText =findPosText(sentenceObj);
    let hiddenText = sentenceObj.hiddenWord;
    let labelText = sentenceObj.labelText;
    let helperText = sentenceObj.helperText;

    let htmlCard = 
        `<div class="row blue-grey lighten-5">
            <div class="col s8 offset-s2">
                <div class="card-panel blue-grey lighten-3">
                    <form id="wordForm"  autocomplete="off" >
                    <span class="black-text">${preText}
                    <div class="input-field inline">
                    <input id="missingWordInput" name="missingWordInput" type="text" class="" style="width:4rem" autofocus>
                    <label for="missingWordInput" class="">${labelText}</label>
                    </div>
                    ${postText}
                    </span>
                    <br>
                   <p><span class="helper-text" data-error="wrong" data-success="right">${helperText}</span></p>
                  <br>
                    <button class="btn waves-effect waves-light" type="submit" name="submitAnswer">
                    <i class="material-icons" id="submitButton">thumb_up</i>
                    </button>
                </form>
                </div>
            </div>
        </div>
        `
        exerciseContainer.innerHTML = htmlCard;
        document.querySelector("#missingWordInput").focus();
        const wordForm = document.querySelector("#wordForm");
        wordForm.addEventListener('submit', function(e){
            e.preventDefault();
            
            const userAnswer = document.querySelector("#missingWordInput").value;
            if(isCorrectAnswer(hiddenText,userAnswer)){
                userAnswers.push(userAnswer);
                userRightAnswers.push(true)
                answerIsCorrect();
            } else {
                userAnswers.push(userAnswer);
                userRightAnswers.push(false);
                answerIsWrong();
                setTimeout(function(){
                    document.querySelector("#missingWordInput").value = (hiddenText);
                },750);
            }
        })

}


function isCorrectAnswer(hiddenText,userAnswer){
    if(hiddenText==userAnswer){
        console.log("Correct answer");
        return true
    } else {
        console.log("Wrong answer")
        return false
    }
}

function answerIsCorrect(){
    // Change Html
    const submitButton = document.querySelector("#submitButton");
    submitButton.innerHTML = "check";

    setTimeout(function(){
        console.log(activeSentence)
        activeSentence++;
        console.log(activeSentence);
        if(activeSentence<exerciseSentences.length){
            displayExerciseCard(exerciseSentences[activeSentence]);

        } else {
            //Show all answers and corrections
            console.log(userAnswers);
            console.log(userRightAnswers);
            displayAnswersCard();
        }
    },500)

}

function answerIsWrong(){
    const submitButton = document.querySelector("#submitButton");
    submitButton.innerHTML = "error";
    submitButton.parentElement.classList.add("red");

    setTimeout(function(){
        submitButton.parentElement.classList.remove("red");
        submitButton.innerHTML = "thumb_up";
    },3000);

    setTimeout(function(){
        activeSentence++;
        
        if(activeSentence<exerciseSentences.length){
            displayExerciseCard(exerciseSentences[activeSentence]);

        } else {
            //Show all answers and corrections
            console.log(userAnswers);
            console.log(userRightAnswers);

            displayAnswersCard();
        }
    },3000)




}

function displayAnswersCard(){

    let html = `
    <table class="striped">
    <tbody>
      <tr>
        <td class="valign-wrapper">
        <i class="material-icons green-text lighten-3" id="submitButton">done</i>
        Jellybean
        </td>
      </tr>

      <tr>
      <td class="valign-wrapper">
      <i class="material-icons orange-text darken-4" id="submitButton">priority_high</i>
      Jellybean
      </td>
      
    </tr>

    </tbody>
  </table>

  
        `
    exerciseContainer.innerHTML = html;
};

// displayAnswersCard()

exerciseInit(exerciseSentences)