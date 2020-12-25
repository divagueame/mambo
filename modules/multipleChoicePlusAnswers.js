import moduleHeader from './moduleHeader.js'
import displayAudio from './displayAudio.js';
export default function multipleChoicePlusAnswers(obj, targetDom) {
  
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
moduleDiv.classList.add("section");
let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])
let moduleContainer = document.createElement('div');
moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);

let questionsForm = document.createElement('form');
questionsForm.classList.add("multipleChoicePlusAnswers")
let correctAnswers = []

let questionsArray = (Object.values(obj.questions))
questionsArray.forEach(function (questionAnswerItem,i) {
  let questionAnswerContainer = document.createElement('div');
  questionAnswerContainer.classList.add("questionAnswerContainer");
  let questionContainer = document.createElement('div');
  questionContainer.classList.add("row");
  questionContainer.innerHTML = `<div class="col s12 heavyText">${1+i}. ${questionAnswerItem.question}</div>`;
  let answerContainer = document.createElement('div');


  if(questionAnswerItem.type=='multiple'){
    correctAnswers.push(questionAnswerItem.answersArray[0])
    let randomId = Math.floor(Math.random()*100000)
    // console.log(questionAnswerItem.question, 'multiple');
    let answersDivs = document.createElement('div');
    answersDivs.classList.add('row');
    let singleAnswerDiv = [];
    
    questionAnswerItem.answersArray.forEach(function(option,j){
      singleAnswerDiv.push(`<div class="col s12">
      <label class="valign-wrapper">
        <i class="material-icons tiny white-text" id="radioIconId${randomId}-${j}">fiber_manual_record</i>
        <input id="radioInputId${randomId}-${j}" required name="userAnswer${i}[group]" type="radio" value="${option}">
        <span>${option}</span>
      </label>
        </div>`)
    });
    
    
        // //Function to shuffle the answers
        function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }

  }
shuffleArray(singleAnswerDiv);
let finalAnswers = ''
  singleAnswerDiv.forEach((e)=>{
        finalAnswers +=e
  })

answersDivs.innerHTML = finalAnswers

  answerContainer.appendChild(answersDivs)
}
  if(questionAnswerItem.type=='openQuestion'){
    answerContainer.classList.add("row")
    let randomId = Math.floor(Math.random()*100000)
    correctAnswers.push(questionAnswerItem.answer)

    let answersDivs =` <div class="row">
    <div class="col s12 marginLeft">
    <div class="valign-wrapper">
      <i class="material-icons tiny" id="inputTextId${randomId}">edit</i>
      <div class="input-field inline">
      <input id="textInputAnwserId${randomId}" autocomplete="off" required type="text" class="validate"  name="userAnswer[${i}][group]">     
      </div>
      </div>
      </div>
  </div>
  <div class="col s12 marginLeft" id="correctAnwserDisplayId${randomId}"></div>`;
    answerContainer.innerHTML = `${answersDivs}`
  }
  
  questionAnswerContainer.appendChild(questionContainer)
  questionAnswerContainer.appendChild(answerContainer)
  
  questionsForm.appendChild(questionAnswerContainer)
});


let submitBtn = document.createElement("button");
submitBtn.classList.add("btn");
submitBtn.classList.add("waves-effect");
submitBtn.classList.add("waves-light");
submitBtn.classList.add("red");
submitBtn.setAttribute("type","submit")
submitBtn.innerHTML = "Check my answers";
questionsForm.appendChild(submitBtn)
moduleContainer.appendChild(questionsForm)



questionsForm.addEventListener('submit', function(e){
  e.preventDefault();
  
  let  inputs = questionsForm.elements;
let userAnswers = []
let userAnwersId = []
  for(let i=0; i<inputs.length; i++){
    if((inputs[i].type=='radio')&&(inputs[i].checked)){
      userAnswers.push(inputs[i].value)
      userAnwersId.push(inputs[i].previousElementSibling.id)
      //USER CHOICE IS
    }
    if(inputs[i].type=='text'){
      //USER input text IS
      userAnswers.push(inputs[i].value);
      userAnwersId.push(inputs[i].parentElement.parentElement.children[0].id)
    }
  }

  // console.log("radio",correctAnswers, userAnswers)
  let counterRightAnswers = 0
  for(let i=0; i<correctAnswers.length; i++){
    if(correctAnswers[i]==userAnswers[i]){
      console.log("User is right");
      counterRightAnswers++;
      let radioBtn = document.querySelector(`#${userAnwersId[i]}`);
      radioBtn.innerHTML = "check";
      radioBtn.classList.remove("white-text")
      radioBtn.classList.add("green-text")
      // inputs[`userAnswer[${i}]`][0].previousElementSibling.innerHTML = "check"

    } else {
      console.log("User is wrong");
      let radioBtnIcon = document.querySelector(`#${userAnwersId[i]}`);
      radioBtnIcon.innerHTML = "close";
      radioBtnIcon.classList.remove("white-text")
      radioBtnIcon.classList.add("red-text");
      
      if(userAnwersId[i].substring(0,11)=="radioIconId"){
        let correctRadioId = (userAnwersId[i].substr(0,userAnwersId[i].length-1))+"0"
        // console.log("radio correct id: ",correctRadioId)
        let correctRadioBtn = document.querySelector(`#${correctRadioId}`);
        correctRadioBtn.innerHTML = "check";
        correctRadioBtn.classList.remove("white-text")
        correctRadioBtn.classList.add("green-text")
        correctRadioBtn.nextElementSibling.checked = true;
      }
      // console.log("POS",userAnwersId[i])
      if(userAnwersId[i].substring(0,11)=="inputTextId"){
        
        let thisId = userAnwersId[i].substring(11)
        console.log("POS",userAnwersId[i],thisId)
        document.querySelector(`#textInputAnwserId${thisId}`).classList.add("red-text")
        document.querySelector(`#correctAnwserDisplayId${thisId}`).innerHTML = `<div class="valign-wrapper"><i class="material-icons tiny green-text">check</i>${correctAnswers[i]}</div>`
      }
    }
  }

  
  
  let toastText = `${counterRightAnswers}/${correctAnswers.length}`
  M.toast({html: 'Ejercicio completado!','displayLength':6800});
  M.toast({html: `Respuestas correctas: ${toastText}`,'displayLength':9000});

  
})

//* <div id="audioContainer1" class="col s4 grey"></div> */
// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)





}