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
  let sentenceWrapper = document.createElement('div');
  sentenceWrapper.classList.add("row",'valign-wrapper','purple')  

  //Prepare images
  let imgSrc1 = obj['speaker1image']
  let imgSrc2 = obj['speaker2image']
  let img1 = document.createElement('div')
  let img2 = document.createElement('div')
  let imageDiv1 = document.createElement('div');
  let imageDiv2 = document.createElement('div');
  if((imgSrc1)&&(imgSrc2)){
    img1.classList.add('ratio', 'img-responsive', 'img-circle')
    img2.classList.add('ratio', 'img-responsive', 'img-circle');
    img1.style.backgroundImage = `url(${imgSrc1})`;
    img2.style.backgroundImage = `url(${imgSrc2})`;
    imageDiv1.classList.add('col','s3','l1')
    imageDiv1.appendChild(img1)
    imageDiv2.classList.add('col','s3','l1')
    imageDiv2.appendChild(img2)
  }
  if(currentSentence==4){
    // console.log(imageDiv1,imageDiv2);
    console.log("Sentence Wrapper", sentenceWrapper)
    console.log('Currente', currentSentence)
  }
  //Append image and text
  let sentenceDiv = document.createElement('div');
  sentenceDiv.classList.add('col','s9','l11')
  let textDiv = document.createElement('div')
  sentenceDiv.appendChild(textDiv)
  if(Object.values(thisConversationObj)[currentSentence]['speaker']==1){
    textDiv.classList.add("speaker1","left")
  sentenceWrapper.appendChild(imageDiv1)  
  sentenceWrapper.appendChild(sentenceDiv)
  }else{
    textDiv.classList.add("speaker2")
    textDiv.classList.add("right")
    sentenceWrapper.appendChild(sentenceDiv) 
    sentenceWrapper.appendChild(imageDiv2) 
  }

///Check if there are more questions left. If there are, check which type. If not, show toast with total correct answers
if(Object.values(thisConversationObj).length>currentSentence){
  
  if(typeof Object.values(thisConversationObj)[currentSentence]['sentence']=="string"){// console.log("String. Hold and continue to next")
  textDiv.innerHTML = Object.values(thisConversationObj)[currentSentence]['sentence'];
  let sentenceLength = (textDiv.innerHTML.length)
  let sentenceTime = 200 + (sentenceLength * 9)
  conversationDiv.appendChild(sentenceWrapper);
    setTimeout(() => {
      currentSentence++;
      renderCurrentSentence()
    }, sentenceTime);
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
    
    

    
function showQuestion(options,rightAnswerPosition){
  let scaleInTimer =120
  let optionsUl = document.createElement('div');
  let divider = document.createElement('div');
  divider.classList.add("divider")
  let speakerImgDiv = document.createElement("div")
  speakerImgDiv.classList.add("row")
  let iconSpeakerImg = document.createElement("i") 
  iconSpeakerImg.classList.add("material-icons","small")
  iconSpeakerImg.innerHTML = 'more_horiz';
  let thisImg
  let isSpeaker1
  if(Object.values(thisConversationObj)[currentSentence]['speaker']==1){
    speakerImgDiv.appendChild(imageDiv1);
    isSpeaker1 = true
    thisImg = imageDiv1
  }else {
    speakerImgDiv.appendChild(imageDiv2);
    thisImg = imageDiv2
    isSpeaker1=false
  }
  speakerImgDiv.appendChild(iconSpeakerImg)
  userAnswerDiv.classList.add("conversationMultipleChoiceUl")
  options.forEach(function(option,i){
    scaleInTimer+=120;
    let li = document.createElement("div") 
    li.classList.add("row")
    
    optionsUl.appendChild(li)
    let liDiv = document.createElement("div")
    liDiv.classList.add("col",'s11', 'offset-s1')
    liDiv.classList.add("answerBubblea","left")
    
    liDiv.innerHTML += `<span class="answerBubble left">${option}</span>`
    li.appendChild(liDiv)
    
    li.classList.add("s","scale-transition","scale-out")
    setTimeout(() => {
      li.classList.add("scale-in")
    }, scaleInTimer);
    
    
    li.addEventListener('click',function(){
      // checkAnswer(i,rightAnswerPosition)
      if(i==rightAnswerPosition){
        let feedback = `<i class="material-icons tiny green-text">check</i>Correcto`
        M.toast({html: feedback})

        // li.firstChild.firstChild.classList.add("answerBubbleCorrect")
        textDiv.innerHTML = rightAnswer;
        if(isSpeaker1){
          sentenceWrapper.insertAdjacentElement('afterbegin', thisImg)
        }else {
          sentenceWrapper.insertAdjacentElement('beforeend', thisImg)
        }
        
        setTimeout(() => {
          
        userAnswerDiv.removeChild(speakerImgDiv)
        userAnswerDiv.removeChild(optionsUl)
          conversationDiv.appendChild(sentenceWrapper);
          currentSentence++;
          renderCurrentSentence();

        }, 700);
      }else{
        let feedback = `<i class="material-icons tiny red-text">close</i>Incorrecto`
        M.toast({html: feedback})
      }
    }
      )
  })
  
  userAnswerDiv.appendChild(speakerImgDiv)
  userAnswerDiv.appendChild(optionsUl)
  
}
  } 
}else{///FInished all sentences. Show toast with total answers

}
}
  
conversationDiv.classList.add("white","lighten-4","sideBorders")
moduleContainer.appendChild(conversationDiv)
moduleContainer.appendChild(userAnswerDiv)
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

