import moduleHeader from './moduleHeader.js'
export default function blankSentences(obj, targetDom) {
  console.log("BLANK SENTENCEs")
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
moduleDiv.classList.add("section");
let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])
let moduleContainer = document.createElement('div')
moduleContainer.classList.add("z-depth-1");

moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);

//USE ONLY ONCE PER LESSON
let activeSentence = 0;
let userAnswers = [];
let userRightAnswers = [];

function displayExerciseCard(sentenceObj){
  let randomId = Math.floor(Math.random()*100000)
  let preText = findPreText(sentenceObj);
  let postText = findPosText(sentenceObj);
  let hiddenText = sentenceObj.hiddenWord;
  let labelText = sentenceObj.labelText;
  let helperText = "";
  let widthPerLetter = .802;
  let thisWidth = hiddenText.length * widthPerLetter;
  let activeCounter = 1 + activeSentence ;
  let counterDisplay = `${activeCounter}/${obj.exerciseSentences.length}`;
  let formDiv = document.createElement('form');
  formDiv.id = `blankSentencesForm${randomId}`;
  formDiv.setAttribute('name',`blankSentencesForm${randomId}`);
  formDiv.setAttribute('autocomplete','off');
  formDiv.classList.add("padding2212");
  formDiv.innerHTML = `
                      <div class="row">
                          <div class="col s12 center">
                              <p>
                              ${preText}
                              <input id="missingWordInput${randomId}" type="text" required class="input-field-corrected-wrong inputTextinParagraph" style="width: ${thisWidth}rem">
                              ${postText}
                              </p>
                          </div>
                          <div class="col s12 grey-text text-lighten-1 center">
                              ${helperText}
                          </div>
                          <div class="right">
                              <button class="btn waves-effect waves-light blue lighten-4" type="submit" name="action" id="submitButton${randomId}">
                              <i class="material-icons" id="submitButtonIcon${randomId}">thumb_up</i>
                              </button><div class="center grey-text text-lighten-1 tinyText">${counterDisplay}</div>
                          </div>
                      </div>
                      `;

  moduleContainer.appendChild(formDiv);
  
  const blankSentencesSubmitButton = document.querySelector(`#submitButton${randomId}`);
  const blankSentencesSubmitButtonIcon = document.querySelector(`#submitButtonIcon${randomId}`);
  // let missingWordInput = `#missingWordInput${randomId}`
  // document.querySelector(missingWordInput).focus();
  formDiv.addEventListener('submit', function(e){
    e.preventDefault();
    
    let userAnswer = document.querySelector(`#missingWordInput${randomId}`).value;
    if(userAnswer!=""){
      activeSentence++;
      userAnswers.push(`${userAnswer}`);
      if(isCorrectAnswer(hiddenText,userAnswer)){ //Correct answer
        userAnswer = "";
        userRightAnswers.push(true);
        blankSentencesSubmitButtonIcon.innerHTML="check";

        setTimeout(function(){
          moduleContainer.removeChild(formDiv)
          if(activeSentence<obj.exerciseSentences.length){
            displayExerciseCard(obj.exerciseSentences[activeSentence]);

          } else { 
              displayAnswersCard(obj.exerciseSentences,userAnswers,userRightAnswers);
          }
        },300)
    
    
      } else { ////Wrong Answer
          userAnswer = "";
          userRightAnswers.push(false);

          //Styles the submit button with color feedback
          blankSentencesSubmitButtonIcon.innerHTML="error";
          blankSentencesSubmitButtonIcon.classList.add("red-text");
          setTimeout(function(){
            blankSentencesSubmitButtonIcon.classList.remove("red-text");
            blankSentencesSubmitButtonIcon.innerHTML = "thumb_up";
          },300); 
          ///Show the right anwer to the user
          setTimeout(function(){ 
            
              // document.querySelector(`#missingWordInput${randomId}`).value = (hiddenText);
              
          },750);

          //Checks if it's the last question
          setTimeout(function(){
            moduleContainer.removeChild(formDiv)
            if(activeSentence<obj.exerciseSentences.length){
                displayExerciseCard(obj.exerciseSentences[activeSentence]);
            } else {
                displayAnswersCard(obj.exerciseSentences,userAnswers,userRightAnswers);
            }
        },300);
      }
  }


    
  })
}






function displayAnswersCard(sentencesObj,userAnswer, userRightAnswers){
  let randomId = Math.floor(Math.random()*100000);
  var answersContainerDiv = document.createElement('div');
  answersContainerDiv.classList.add("padding2212");
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
      function (item, index, arr) {
          let icon = 'done';
          let iconColor = "green-text lighten-3 ";
          let thisKeyWordClass = "guessWordRight";
          let tooltipData = "";
          let thisUserAnswer = userAnswer[index];
          
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
                  <i class="tiny material-icons ${iconColor}" id="${randomId}itemId">${icon}</i>
                  ${pre}<span class="${thisKeyWordClass}"  ${tooltipData}>${thisKeyWord}</span>${pos}
              </p>`;
          
      }
  );



  let resetBtn = `
  <div class="row">
  <button class="btn-floating pulse right btn waves-effect waves-light orange lighten-2 accent-3">
  <i class="material-icons black-text" id="resetIcon${randomId}">replay</i>
  </button>
  </div>`

  
  sentences += resetBtn;
  answersContainerDiv.innerHTML = `${sentences}`;
  moduleContainer.appendChild(answersContainerDiv);
  
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems, {});  
  const resetIcon = document.querySelector(`#resetIcon${randomId}`);
  setTimeout(() => {
      resetMissingWordSentencesExercise.parentElement.classList.remove("pulse");
      resetMissingWordSentencesExercise.parentElement.classList.remove("accent-3");
  }, 1800);
  resetIcon.parentElement.addEventListener('click', function(){
      activeSentence = 0;
      moduleContainer.removeChild(answersContainerDiv)
      displayExerciseCard(obj.exerciseSentences[0]);
  })
};



displayExerciseCard(obj.exerciseSentences[0]);
}

























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


function isCorrectAnswer(hiddenText,userAnswer){
  if(hiddenText==userAnswer){
      console.log("Correct answer");
      return true
  } else {
      console.log("Wrong answer")
      return false
  }
}













///OBJ EXAMPLE
// {
//   'activityModuleType': 'blankSentences',
//   'activityOrder': 3,
//   'moduleHeaderText' : '3 Blank el siguiente ejercicio con el/la',
//   'moduleHeaderIcon': 'airplay',
//   'moduleBasicText': '',
//   'showTranslation': true,
//   'exerciseSentences': 
//   [
//       {
//           'text': "El gato de mi madre es muy bonito.",
//           'hiddenWord': "es",
//           'labelText': "verbo ser",
//           'helperText': "My mother's cat is very beautiful."
//       },
//       {
//           'text': "El padre come muchas galletas.",
//           'hiddenWord': "come",
//           'labelText': "verbo comer",
//           'helperText': "The father eats many cookies."
//       },
//       {
//           'text': "El profesor canta muy bien.",
//           'hiddenWord': "canta",
//           'labelText': "verbo cantar",
//           'helperText': "The teacher sings very well."
//       },
//       {
//           'text': "El perro corre muy rapido.",
//           'hiddenWord': "corre",
//           'labelText': "verbo correr",
//           'helperText': "The dog runs very fast."
//       }
//   ]
  
// }, 