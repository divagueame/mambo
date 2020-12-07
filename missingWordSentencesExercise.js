export default function missingWordSentencesExercise(targetDom, exerciseObj) {

let activeSentence = 0;
let userAnswers = [];
let userRightAnswers = [];

function exerciseInit(sentences){
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
        targetDom.innerHTML = htmlCard;
        document.querySelector("#missingWordInput").focus();
        const wordForm = document.querySelector("#wordForm");
        wordForm.addEventListener('submit', function(e){
            e.preventDefault();
            
            const userAnswer = document.querySelector("#missingWordInput").value;
            if(userAnswer!=""){
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
                    },75);
                }
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
        if(activeSentence<exerciseObj.length){
            displayExerciseCard(exerciseObj[activeSentence]);
        } else {
            //Show all answers and corrections
            console.log(userAnswers);
            console.log(userRightAnswers);
            displayAnswersCard(exerciseObj,userAnswers,userRightAnswers);
        }
    },5)

}

function answerIsWrong(){
    const submitButton = document.querySelector("#submitButton");
    submitButton.innerHTML = "error";
    submitButton.parentElement.classList.add("red");

    setTimeout(function(){
        submitButton.parentElement.classList.remove("red");
        submitButton.innerHTML = "thumb_up";
    },3); //3000

    setTimeout(function(){
        activeSentence++;
        if(activeSentence<exerciseObj.length){
            displayExerciseCard(exerciseObj[activeSentence]);

        } else {
            //Show all answers and corrections
            console.log(userAnswers);
            console.log(userRightAnswers);

            displayAnswersCard(exerciseObj,userAnswers,userRightAnswers);
        }
    },3);
}

function displayAnswersCard(sentencesObj,userAnswer, userRightAnswers){
    let sentences= '';
    
    sentencesObj.forEach(
        function answerList(item, index, arr) {

            let rightAnswer = true;
            let icon = 'done';
            let iconColor = "green-text lighten-3";
            // console.log(userRightAnswers[index])
            if(userRightAnswers[index]==false){
                rightAnswer = false;
                icon = 'priority_high';
                iconColor = "red-text lighten-3";
            };
            let thisUserAnswer = userAnswer[index];
            
            sentences +=
            `
            <tr>
                <td class="valign-wrapper">
                <i class="material-icons ${iconColor} id="submitButton">${icon}</i>
                ${sentencesObj[index].text}
                </td>
            </tr>
            `;
            if(userRightAnswers[index]==false){
                sentences +=
                 `
                <tr>
                    <td class="valign-wrapper center">
                        ${thisUserAnswer}
                    </td>
                </tr>
            `;
            }
        }
    );

  
    let html = `
    <table class="striped">
    <tbody>${sentences}
    </tbody>
    </table>
        `
        targetDom.innerHTML = html;
};

// displayAnswersCard()

exerciseInit(exerciseObj)

}