import moduleHeader from './moduleHeader.js'
import displayAudio from './displayAudio.js';

let currentSentence = 0;
export default function conversationMultipleChoice(obj, targetDom) {
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
if(obj['moduleHeaderText']!=""){
  let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])
  moduleDiv.appendChild(moduleHeaderDiv);
}

let moduleContainer = document.createElement('div')

let userAnswerDiv = document.createElement('div')
let conversationDiv = document.createElement('div');

let sourceTxt = obj['conversation'];
sourceTxt = sourceTxt.split("\n");
let thisConversationObj = conversationObj(sourceTxt)
function conversationObj(text){
  let conversationArray = []
  text.forEach(function(sentence, i) {
    let thisSentenceObj = {}
    let sentenceTrimmed = sentence.trim()
    if(sentenceTrimmed!=""){
    thisSentenceObj['speaker'] = 1;
    
    //Determine the speaker by the first letter of the ime
    if(sentenceTrimmed.substring(0,1)=='2'){
      thisSentenceObj['speaker'] = 2;
      sentenceTrimmed = sentenceTrimmed.trim()
      sentenceTrimmed = sentenceTrimmed.substring(1,sentenceTrimmed.length)
      if(((sentenceTrimmed.substring(0,1)=="–")||
      sentenceTrimmed.substring(0,1)=="-")){
        sentenceTrimmed = sentenceTrimmed.substring(1,sentenceTrimmed.length);
        sentenceTrimmed= sentenceTrimmed.trim()
      }
    }
    
    //Determine if it's normal line or a question line
    if(sentenceTrimmed.includes('%')){
      //It's a question
      let sentenceArray = []
      let newsentenceTrimmed = sentenceTrimmed.split("%")
      
      newsentenceTrimmed.forEach(function(option,i){
        option = option.trim();
        if(((option.substring(0,1)=="–")||
        option.substring(0,1)=="-")){
          option = option.substring(1,option.length)
        }
        option = option.trim()
        sentenceArray.push(option)
      })
      thisSentenceObj['sentence'] = sentenceArray
      }else{
        if(((sentenceTrimmed.substring(0,1)=="–")||
        sentenceTrimmed.substring(0,1)=="-")){
          sentenceTrimmed = sentenceTrimmed.substring(1,sentenceTrimmed.length);
          sentenceTrimmed= sentenceTrimmed.trim()
        }
        sentenceTrimmed = sentenceTrimmed.trim()
        thisSentenceObj['sentence'] = sentenceTrimmed
      }
      conversationArray.push(thisSentenceObj)
    } 
  });
  return conversationArray
}
renderCurrentSentence()
function renderCurrentSentence(){
  let sentenceDiv = document.createElement('div');
///Check if there are more questions left. If there are, check which type. If not, show toast with total correct answers

if(Object.values(thisConversationObj).length>currentSentence){
  if(typeof Object.values(thisConversationObj)[currentSentence]['sentence']=="string"){// console.log("String. Hold and continue to next")
    sentenceDiv.innerHTML = Object.values(thisConversationObj)[currentSentence]['sentence']
    sentenceDiv.classList.add("shadow")
    if(Object.values(thisConversationObj)[currentSentence]['speaker']==1){
      sentenceDiv.classList.add("speaker1")
    }else{
      sentenceDiv.classList.add("speaker2")
    }
    conversationDiv.appendChild(sentenceDiv)
    setTimeout(() => {
      currentSentence++;
      renderCurrentSentence()
    }, 2000);
  }else{ // console.log("Array. Stop! QUestion time")
    let options = Object.values(thisConversationObj)[currentSentence]['sentence']
    let rightAnswer = options[0];
    let rightAnswerPosition
    shuffleArray(options)
    options.forEach(function(e,i){
      if(e==rightAnswer){
        rightAnswerPosition = i
      }
    })

    // console.log(rightAnswer,rightAnswerPosition,options)
    showQuestion(options,rightAnswerPosition)
    currentSentence++;
    // conversationDiv.appendChild(sentenceDiv)
  } 
}else{///FInished all sentences. Show toast with total answers

}
}
  
function showQuestion(options,rightAnswerPosition){
  let optionsUl = document.createElement('ul');
  optionsUl.classList.add("conversationMultipleChoiceForm","center")
  options.forEach(function(option,i){
    let li = document.createElement("li") 
    li.classList.add("userChoiceBtn","valign-wrapper")
    li.innerHTML = `<i class="material-icons tiny">chevron_right</i>${option}`;
    
    optionsUl.appendChild(li)
    li.addEventListener('click',function(){
      // checkAnswer(i,rightAnswerPosition)
      if(i==rightAnswerPosition){
        //Show feedback
        let feedback = `<i class="material-icons tiny green-text">check</i>Correcto`
        M.toast({html: feedback})
        optionsUl.innerHTML = ``;
        optionsUl.appendChild(li);
        setTimeout(() => {
          optionsUl.innerHTML = ``;
          renderCurrentSentence()
        }, 1000);
      }else{
        let feedback = `<i class="material-icons tiny red-text">close</i>Incorrecto`
        M.toast({html: feedback})
      }
    }
      )
  })
  
  userAnswerDiv.appendChild(optionsUl)

}
moduleContainer.appendChild(userAnswerDiv)
moduleContainer.appendChild(conversationDiv)
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);

}


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function checkAnswer(i,rightAnswerPosition){
  
  console.log(i,rightAnswerPosition)
}

