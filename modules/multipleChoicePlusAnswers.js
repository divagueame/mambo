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
let correctAnswers = []

let questionsArray = (Object.values(obj.questions))
questionsArray.forEach(function (questionAnswerItem,i) {
  let questionAnswerContainer = document.createElement('div');
  let questionContainer = document.createElement('div');
  questionContainer.classList.add("row");
  questionContainer.innerHTML = `<div class="col s12">${1+i}. ${questionAnswerItem.question}</div>`;
  let answerContainer = document.createElement('div');


  if(questionAnswerItem.type=='multiple'){
    correctAnswers.push(questionAnswerItem.answersArray[0])
    
    // console.log(questionAnswerItem.question, 'multiple');
    let answersDivs = document.createElement('div');
    answersDivs.classList.add('row');
    let singleAnswerDiv = []
    questionAnswerItem.answersArray.forEach(function(option){
      singleAnswerDiv.push(`<div class="col s12">
      <label>
      <input name="userAnswer[${i}][first_name]" type="radio" value="${option}">
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
      
          // answerContainer.innerHTML = `<div class="col s12">${answersDivs}</div>`
          // console.log("QUE ES", answersDivs);
          // answersDivs.forEach((singleDiv)=>{
            // console.log("A",singleDiv)
          // })
          // answerContainer.appendChild(answersDivs)
          // answerContainer.innerHTML = `<div class="col s12">POLLAS</div>`
  }
shuffleArray(singleAnswerDiv);
let finalAnswers = ''
  singleAnswerDiv.forEach((e)=>{
        console.log("as",typeof e)
        finalAnswers +=e
  })

answersDivs.innerHTML = finalAnswers

  answerContainer.appendChild(answersDivs)
}
  if(questionAnswerItem.type=='openQuestion'){
    correctAnswers.push(questionAnswerItem.answer)
    let answersDivs = `<div class="row">`
    //questionAnswerItem.question Right answer
      answersDivs += `
      <div class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">edit</i>
            <input id="icon_prefix" autocomplete="off" type="text" class="validate"  name="userAnswer[${i}][first_name]">
            <label for="icon_prefix">First Name</label>
          </div>
        </div>
      </form>
    `
   
    answersDivs += `</div>`
    answerContainer.innerHTML = `<div class="col s12">${answersDivs}</div>`
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
  // console.log(correctAnswers)
  // console.log(questionsForm.elements[`userAnswer[0][first_name]`].value)
  let  inputs = questionsForm.elements;

  for(let i=0; i<inputs.length; i++){
    
    if((inputs[i].type=='radio')&&(inputs[i].checked)){
      //USER CHOICE IS
      // console.log(inputs[i].value);
    }
    if(inputs[i].type=='text'){
      //USER input text IS
      // console.log(inputs[i].value);
    }

  }
  // console.log(questionsForm.elements.length)
  

  // questionsForm.elements.forEach(function(e,i,a){
  //   if(e.checked){
  //     console.log("User checked: ", e)
  //   }
    
  // })

  // console.log(questionsForm.elements[0].checked)
  // console.log(questionsForm.elements[1].checked)
  // console.log(questionsForm.elements[2].checked)
  // console.log(questionsForm.elements[3].checked)

  
})

//* <div id="audioContainer1" class="col s4 grey"></div> */
// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)





}