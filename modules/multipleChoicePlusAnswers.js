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

let questionsTable = document.createElement('div');

let questionsArray = (Object.values(obj.questions))
questionsArray.forEach(function (questionAnswerItem,i) {
  let questionAnswerContainer = document.createElement('div');
  let questionContainer = document.createElement('div');
  questionContainer.classList.add("row");
  questionContainer.innerHTML = `<div class="col s12">${questionAnswerItem.question}</div>`;
  let answerContainer = document.createElement('div');

  if(questionAnswerItem.type=='multiple'){
    console.log(questionAnswerItem.question, 'multiple');
    let answersDivs = `<div class="row">`
    questionAnswerItem.answersArray.forEach(function(option){
      answersDivs += `<div class="col  s12">
      <label>
      <input name="group1" type="radio" checked />
      <span> ${option}</span>
    </label>
   
        </div>`
    })
    answersDivs += `</div>`
    answerContainer.innerHTML = `<div class="col s12">${answersDivs}</div>`
  }
  if(questionAnswerItem.type=='openQuestion'){
    console.log(questionAnswerItem.question, 'openQuestion')
  }
  questionAnswerContainer.appendChild(questionContainer)
  questionAnswerContainer.appendChild(answerContainer)
  questionsTable.appendChild(questionAnswerContainer)
});

moduleContainer.appendChild(questionsTable)

//* <div id="audioContainer1" class="col s4 grey"></div> */
// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)





}