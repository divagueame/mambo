export default function missingWordSentencesExercise(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
    targetDomDefault = document.querySelector(targetDom);
  }
  var moduleDiv = document.createElement('div');
  moduleDiv.classList.add("moduleDiv");
//   moduleDiv.classList.add('row')
//   moduleDiv.classList.add('center')
//   moduleDiv.classList.add('grey')
//   moduleDiv.classList.add('z-depth-1')
  targetDomDefault.appendChild(moduleDiv)


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
    
  var exerciseContainer = document.createElement("div");
  exerciseContainer.classList.add("missingWordSentencesExerciseContainer")
  exerciseContainer.classList.add("col")
  exerciseContainer.classList.add("s12")
  exerciseContainer.classList.add("section")
    let preText = findPreText(sentenceObj);
    let postText = findPosText(sentenceObj);
    let hiddenText = sentenceObj.hiddenWord;
    let labelText = sentenceObj.labelText;
    let helperText = sentenceObj.helperText;

    exerciseContainer.innerHTML = `
            <br>
                    <form id="wordForm" autocomplete="off">
                    <span>${preText}
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
                `
    

            moduleDiv.appendChild(exerciseContainer);
            const submitButton = document.querySelector("#submitButton");
            document.querySelector("#missingWordInput").focus();

            const wordForm = document.querySelector("#wordForm");
            wordForm.addEventListener('submit', function(e){
            e.preventDefault();
            let userAnswer = document.querySelector("#missingWordInput").value;
     
            if(userAnswer!=""){
                let userAnswerWithSentence = `${preText}<div class="red" style="text-decoration:underline">&nbsp;${userAnswer}&nbsp;</div>${postText}`;
                // userAnswers.push(userAnswerWithSentence);
                userAnswers.push(`${preText}${userAnswer}${postText}`);
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
    activeSentence++;
    submitButton.innerHTML = "check";
    const wordForm = document.querySelector('#wordForm')
    setTimeout(function(){

        if(activeSentence<obj.exerciseSentences.length){
            console.log("Right answer. Another exercise");
            moduleDiv.removeChild(moduleDiv.childNodes[0]);
            displayExerciseCard(obj.exerciseSentences[activeSentence]);
            
        } else {
            moduleDiv.removeChild(moduleDiv.childNodes[0]);
            displayAnswersCard(obj.exerciseSentences,userAnswers,userRightAnswers);
            console.log("Right answer. AExercise finished. Show answers")
        }
    },200)

}

function answerIsWrong(){
    activeSentence++;
    const submitButton = document.querySelector("#submitButton");
    submitButton.innerHTML = "error";
    submitButton.parentElement.classList.add("red");

    setTimeout(function(){
        submitButton.parentElement.classList.remove("red");
        submitButton.innerHTML = "thumb_up";
    },300); 

    setTimeout(function(){

        if(activeSentence<obj.exerciseSentences.length){
            
            moduleDiv.removeChild(moduleDiv.childNodes[0]);
            displayExerciseCard(obj.exerciseSentences[activeSentence]);

        } else {
            moduleDiv.removeChild(moduleDiv.childNodes[0]);
            displayAnswersCard(obj.exerciseSentences,userAnswers,userRightAnswers);
        }
    },300);
}

function displayAnswersCard(sentencesObj,userAnswer, userRightAnswers){
    let sentences= '';
    // console.log("DIsplay Answers card")
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


    var exerciseContainer = document.createElement("div");
    // exerciseContainer.classList.add("missingWordSentencesExerciseContainer")
    // exerciseContainer.classList.add("row")



    sentencesObj.forEach(
        function answerList(item, index, arr) {

            let rightAnswer = true;
            let icon = 'done';
            let iconColor = "green-text lighten-3 ";
            let bgcolor = 'white'
            
            if(userRightAnswers[index]==false){
                // rightAnswer = false;
                // icon = 'priority_high';
                // iconColor = "red-text lighten-3";
                // bgcolor = 'accent-2'
            };
            let thisUserAnswer = userAnswer[index];
            let correction = '';
            if(userRightAnswers[index]==false){
                correction +=
                 `
                <div class="${bgcolor} row"><div class="col s12">
                    <i class="material-icons tiny red-text" id="submitButton">fiber_manual_record</i>
                    ${thisUserAnswer} </div>
                </div>
            `;


            sentences +=
            `
            <div class="${bgcolor} row pink"><div class="col s12">
                <i class="tiny material-icons ${iconColor}" id="submitButton">${icon}</i>
                ${sentencesObj[index].text}
                ${correction}
                </div></div>
            `;

            }
        }
    );

  
    exerciseContainer.innerHTML = `
    ${sentences}
        `

        moduleDiv.appendChild(exerciseContainer)
};

displayExerciseCard(obj.exerciseSentences[0]);
}














// let exerciseSentences = [
//     {
//         text: "El gato de mi madre es muy bonito.",
//         hiddenWord: "es",
//         labelText: "verbo ser",
//         helperText: "My mother's cat is very beautiful."
//     },
//     {
//         text: "El padre come muchas galletas.",
//         hiddenWord: "come",
//         labelText: "verbo comer",
//         helperText: "The father eats many cookies."
//     },
//     {
//         text: "El profesor canta muy bien.",
//         hiddenWord: "canta",
//         labelText: "verbo cantar",
//         helperText: "The teacher sings very well."
//     },
//     {
//         text: "El perro corre muy rapido.",
//         hiddenWord: "corre",
//         labelText: "verbo correr",
//         helperText: "The dog runs very fast."
//     }
// ]

