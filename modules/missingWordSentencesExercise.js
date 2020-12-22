import moduleHeader from './moduleHeader.js'
export default function missingWordSentencesExercise(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
    targetDomDefault = document.querySelector(targetDom);
  }
  var moduleDiv = document.createElement('div');
  moduleDiv.classList.add("moduleDiv");
  moduleDiv.classList.add('section')
  targetDomDefault.appendChild(moduleDiv);
  
let moduleHeaders = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon']);
moduleDiv.appendChild(moduleHeaders)
var exerciseContainer = document.createElement("div");
exerciseContainer.classList.add("missingWordSentencesExerciseContainer");
exerciseContainer.classList.add('z-depth-1');
moduleDiv.appendChild(exerciseContainer);

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

// moduleDiv.appendChild(exerciseContainer)
function displayExerciseCard(sentenceObj){


    let preText = findPreText(sentenceObj);
    let postText = findPosText(sentenceObj);
    let hiddenText = sentenceObj.hiddenWord;
    let labelText = sentenceObj.labelText;
    let helperText = "";

    let widthPerLetter = .802;
    let thisWidth = hiddenText.length * widthPerLetter;
    
    // if(obj.showTranslation){
    //     helperText = sentenceObj.helperText;
    // }

    let activeCounter = 1 + activeSentence ;
    let counterDisplay = `${activeCounter}/${obj.exerciseSentences.length}`;

let formDiv = document.createElement('form');
formDiv.id = "wordForm";
formDiv.setAttribute('autocomplete','off');

formDiv.innerHTML = `
                        <div class="row">
                            <div class="col s12 center">
                                <p>
                                ${preText}
                                <input id="missingWordInput" type="text" required class="input-field-corrected-wrong inputTextinParagraph" style="width: ${thisWidth}rem">
                                ${postText}
                                </p>
                            </div>
                            <div class="col s12 grey-text text-lighten-1 center">
                                ${helperText}
                            </div>
                            <div class="right">
                                <button class="btn waves-effect waves-light blue lighten-4" type="submit" name="action" id="submitButtonMissingWordSentencesExercise">
                                <i class="material-icons" id="submitButtonLogo">thumb_up</i>
                                </button><div class="center grey-text text-lighten-1 tinyText">${counterDisplay}</div>
                            </div>
                        </div>
                        `;
    

                        exerciseContainer.appendChild(formDiv);

            const submitButton = document.querySelector("#submitButtonMissingWordSentencesExercise");
            document.querySelector("#missingWordInput").focus();
            const wordForm = document.querySelector("#wordForm");
   
            submitButton.addEventListener('submit', function(e){
            e.preventDefault();

            let userAnswer = document.querySelector("#missingWordInput").value;
            
            if(userAnswer!=""){
                userAnswers.push(`${userAnswer}`);
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
    
    const submitButton = document.querySelector("#submitButtonMissingWordSentencesExercise");
    submitButton.innerHTML = "check";
    const wordForm = document.querySelector('#wordForm')
    setTimeout(function(){

        if(activeSentence<obj.exerciseSentences.length){
            exerciseContainer.removeChild(exerciseContainer.childNodes[0]);
            displayExerciseCard(obj.exerciseSentences[activeSentence]);
            
        } else {
            exerciseContainer.removeChild(exerciseContainer.childNodes[0]);
            displayAnswersCard(obj.exerciseSentences,userAnswers,userRightAnswers);
        }
    },200)

}

function answerIsWrong(){
    activeSentence++;
    const submitButton = document.querySelector("#submitButtonMissingWordSentencesExercise");
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
            `<p class="col s12">
                    <i class="tiny material-icons ${iconColor}" id="${index}itemId">${icon}</i>
                    ${pre}<span class="${thisKeyWordClass}"  ${tooltipData}>${thisKeyWord}</span>${pos}
                </p>`;
            
        }
    );



    let resetBtn = `

    <div class="row">
    <button class="btn-floating pulse right btn waves-effect waves-light orange lighten-2 accent-3">
    <i class="material-icons black-text" id="resetMissingWordSentencesExercise">replay</i>
    </button>
    </div>`

    
    sentences += resetBtn;
    answersContainerDiv.innerHTML = `${sentences}`;
    wordForm.parentElement.appendChild(answersContainerDiv)
    wordForm.parentElement.removeChild(wordForm);
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});  
    const resetMissingWordSentencesExercise = 
    document.querySelector("#resetMissingWordSentencesExercise");
    setTimeout(() => {
        
        resetMissingWordSentencesExercise.parentElement.classList.remove("pulse");
        resetMissingWordSentencesExercise.parentElement.classList.remove("accent-3");
    }, 1800);
    resetMissingWordSentencesExercise.addEventListener('click', function(){
        activeSentence = 0
        displayExerciseCard(obj.exerciseSentences[0]);
    })
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

