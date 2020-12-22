export default function missingWordSentencesExercise(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
    targetDomDefault = document.querySelector(targetDom);
  }
  var moduleDiv = document.createElement('div');
  moduleDiv.classList.add("moduleDiv");
  moduleDiv.classList.add('section')
//   moduleDiv.classList.add('center')
//   moduleDiv.classList.add('grey')

  targetDomDefault.appendChild(moduleDiv)
  var moduleHeader = document.createElement('div');
  moduleHeader.innerHTML = `<h3 class="valign-wrapper"><i class="material-icons">widgets</i><span> 1.2 Completa el siguiente ejercicio con el/la</span></h3>`
  moduleDiv.appendChild(moduleHeader)

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
var exerciseContainer = document.createElement("div");

exerciseContainer.classList.add("missingWordSentencesExerciseContainer");
//   exerciseContainer.classList.add("col")
//   exerciseContainer.classList.add("s12")
exerciseContainer.classList.add('z-depth-1')

function displayExerciseCard(sentenceObj){
    let preText = findPreText(sentenceObj);
    let postText = findPosText(sentenceObj);
    let hiddenText = sentenceObj.hiddenWord;
    let labelText = sentenceObj.labelText;
    let helperText = sentenceObj.helperText;

    exerciseContainer.innerHTML = `
                    <form id="wordForm" autocomplete="off" class="">
                        <div class="row">
                     
                            <div class="col s12 firstLine center">
                                <p>
                                ${preText}
                                <input id="missingWordInput" type="text" required class="input-field-corrected-wrong inputTextinParagraph" style="width: 2rem">
                                ${postText}
                                </p>
                            </div>
                            <div class="col s12 SecondLine grey-text text-lighten-1 center">
                                ${helperText}
                            </div>
                            <div class="thirdLine grey right">
                            <button class="btn waves-effect waves-light blue lighten-4" type="submit" name="submitAnswer">
                            <i class="material-icons" id="submitButton">thumb_up</i>
                            </button>
                            </div>
                           
                        </div>`;
    

            moduleDiv.appendChild(exerciseContainer);
            const submitButton = document.querySelector("#submitButton");
            document.querySelector("#missingWordInput").focus();

            const wordForm = document.querySelector("#wordForm");
            wordForm.addEventListener('submit', function(e){
            e.preventDefault();
            let userAnswer = document.querySelector("#missingWordInput").value;
                console.log("Escribe",userAnswer)
            if(userAnswer!=""){
                // let userAnswerWithSentence = `${preText}<div class="red" style="text-decoration:underline">&nbsp;${userAnswer}&nbsp;</div>${postText}`;
                // userAnswers.push(userAnswerWithSentence);
                userAnswers.push(`${userAnswer}`);
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
            exerciseContainer.removeChild(exerciseContainer.childNodes[0]);
            displayExerciseCard(obj.exerciseSentences[activeSentence]);
            
        } else {
            exerciseContainer.removeChild(exerciseContainer.childNodes[0]);
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
            exerciseContainer.removeChild(exerciseContainer.childNodes[0]);
            displayExerciseCard(obj.exerciseSentences[activeSentence]);

        } else {
            exerciseContainer.removeChild(exerciseContainer.childNodes[0]);
            displayAnswersCard(obj.exerciseSentences,userAnswers,userRightAnswers);
        }
    },300);
}

function displayAnswersCard(sentencesObj,userAnswer, userRightAnswers){
    var answersContainerDiv = document.createElement('div');
    let sentences= '';;
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
        function (item, index, arr) {
            // let rightAnswer = true;
            console.log("POLLAs",userAnswer)
            let icon = 'done';
            let iconColor = "green-text lighten-3 ";
            let thisKeyWordClass = "guessWordRight";
            let tooltipData = "";
            let thisUserAnswer = userAnswer[index];
            // console.log(findPreText(item),item.hiddenWord, findPosText(item))
            if(userRightAnswers[index]==false){
                icon = 'priority_high';
                iconColor = "red-text lighten-3";
                thisKeyWordClass = 'guessWordWrong tooltipped';
                tooltipData = `data-position = "top" data-tooltip="${thisUserAnswer}"`
            };
            
                let pre = findPreText(item);
                let thisKeyWord = item.hiddenWord;
                let pos = findPosText(item)
            sentences +=
            `
            <p>
            <div class="row"><div class="col s12">
                 <i class="tiny material-icons ${iconColor}"id="submitButton">${icon}</i>${pre}<span class="${thisKeyWordClass}"  ${tooltipData}>${thisKeyWord}</span>${pos}
                   
                </div></div> </p>
               
            `;
            
        }
    );

  
    answersContainerDiv.innerHTML = `${sentences}`;
    wordForm.parentElement.appendChild(answersContainerDiv)
    wordForm.parentElement.removeChild(wordForm);
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});  
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

