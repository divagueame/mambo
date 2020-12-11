export default function missingWordSentencesExercise(targetDom, exerciseObj) {
//USE ONLY ONCE PER LESSON
let activeSentence = 0;
let userAnswers = [];
let userRightAnswers = [];

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
        `
            <div class="row center">
                <div class="col s8 offset-s2 card-panel blue-grey lighten-3">
                    <form id="wordForm"  autocomplete="off">
                    <span class="black-text">${preText}
                    <div class="input-field inline">
                    <input id="missingWordInput" name="missingWordInput" type="text" class="" style="width:4rem">
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
        `

        //////////////////////
        targetDom.innerHTML = htmlCard;

const submitButton = document.querySelector("#submitButton");

        // document.querySelector("#missingWordInput").focus();

const wordForm = document.querySelector("#wordForm");
        wordForm.addEventListener('submit', function(e){
            e.preventDefault();
            let userAnswer = document.querySelector("#missingWordInput").value;
     
            if(userAnswer!=""){
                let userAnswerWithSentence = `${preText}<div class="red" style="text-decoration:underline">&nbsp;${userAnswer}&nbsp;</div>${postText}`;
                
                userAnswers.push(userAnswerWithSentence);
                    // userAnswers.push(userAnswer);
                if(isCorrectAnswer(hiddenText,userAnswer)){
                    userAnswer = "";
                    userRightAnswers.push(true)
                    answerIsCorrect();
                } else {
                    userAnswer = "";
                    userRightAnswers.push(false);
                    answerIsWrong();
                    setTimeout(function(){
                        document.querySelector("#missingWordInput").value = (hiddenText);
                    },750);
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
    submitButton.innerHTML = "check";
    
    setTimeout(function(){
        activeSentence++;
        if(activeSentence<exerciseObj.length){
            displayExerciseCard(exerciseObj[activeSentence]);
        } else {
            displayAnswersCard(exerciseObj,userAnswers,userRightAnswers);
        }
    },2000)

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
        if(activeSentence<exerciseObj.length){
            displayExerciseCard(exerciseObj[activeSentence]);

        } else {
            displayAnswersCard(exerciseObj,userAnswers,userRightAnswers);
        }
    },3000);
}

function displayAnswersCard(sentencesObj,userAnswer, userRightAnswers){
    let sentences= '';
    function howManyTrue(array){
        let num = 0;
        array.forEach((x)=>{
            if(x==true){
                num++
            }
        });
        return num
    }

    let toastText = `${howManyTrue(userRightAnswers)}/${sentencesObj.length}`
    M.toast({html: 'Ejercicio completado!'});
    M.toast({html: `Respuestas correctas: ${toastText}`});


    sentencesObj.forEach(
        function answerList(item, index, arr) {

            let rightAnswer = true;
            let icon = 'done';
            let iconColor = "green-text lighten-3 ";
            let bgcolor = 'white'
            
            if(userRightAnswers[index]==false){
                rightAnswer = false;
                icon = 'priority_high';
                iconColor = "red-text lighten-3";
                bgcolor = 'accent-2'
            };
            let thisUserAnswer = userAnswer[index];
            
            sentences +=
            `
            <tr class="${bgcolor}">
                <td class="valign-wrapper">
                <i class="tiny material-icons ${iconColor}" id="submitButton">${icon}</i>
                ${sentencesObj[index].text}
                </td>
            </tr>
            `;
            if(userRightAnswers[index]==false){
                sentences +=
                 `
                <tr  class="${bgcolor}">
                    <td class="valign-wrapper center red lighten-5 userWrongAnswer" style="padding-left: 42px">
                    <i class="material-icons tiny red-text" id="submitButton">fiber_manual_record</i>
                        Your answer: ${thisUserAnswer}
                    </td>
                </tr>
            `;
            }
        }
    );

  
    let html = `
    <table class="centered">
    <tbody>${sentences}
    </tbody>
    </table>
        `
        targetDom.innerHTML += html;
};

displayExerciseCard(exerciseObj[activeSentence]);
}