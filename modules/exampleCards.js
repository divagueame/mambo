import moduleHeader from './moduleHeader.js';
import displayAudio from './displayAudio.js';

export default function examplesCard(obj, targetDom) {

      
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
  moduleContainer.classList.add("row");
  // moduleContainer.classList.add("red");
  

  moduleDiv.appendChild(moduleHeaderDiv);
  moduleDiv.appendChild(moduleContainer);
  
  targetDomDefault.appendChild(moduleDiv);

  obj.examplesArray.forEach(function(example,i,a){
    let exampleDiv = document.createElement('div');
    exampleDiv.classList.add("col")

    if(obj.examplesArray.length==1){
      exampleDiv.classList.add('s10', 'offset-s1', 'l4', 'offset-l4')
    }
    if(obj.examplesArray.length==2){
      exampleDiv.classList.add('s10', 'offset-s1', 'm4', 'offset-m1','l4', 'offset-l1')
    }
    if(obj.examplesArray.length==3){
      exampleDiv.classList.add('s10', 'offset-s1', 'm4', 'l4')
    }
    if(obj.examplesArray.length==4){
      exampleDiv.classList.add('s8', 'offset-s2', 'm4', 'l3', 'offset-la4')
    }


    let randomId = Math.floor(Math.random()*100000);
    exampleDiv.innerHTML+= `
    <div class="exampleCards blue-grey darken-1 z-depth-1">
    <img src="${example.imgSrc}" class="responsive-img"><div class="valign-wrapper" id="exampleCardsAudioId${randomId}"><span class="center">${example.text}</span></div>
    </div>
    `

  moduleContainer.appendChild(exampleDiv); 
  //Add audio 
  if(example.audioSrc!=""){
    const selectAudioContainer = document.getElementById(`exampleCardsAudioId${randomId}`)
    let audioSrc = example.audioSrc
    selectAudioContainer.appendChild(displayAudio(audioSrc,selectAudioContainer))
}

  })



  //Add audio buttons
  // const selectAudioContainer = document.querySelector(`#exampleAudioId${randomId}`);
  // let audioSrc = obj.examplesArray[0].audioSrc
  // displayAudio(audioSrc,selectAudioContainer)

}














////EXAMPLE OBJ
// {
//   'activityModuleType': 'exampleCards',
//   'activityOrder': 6,
//   'moduleHeaderText': "2 Let's have  a look at some examples...",
//   'moduleHeaderIcon': 'create',
//   'moduleBasicText': 'Try to remember these words',
//   'autoShowTranslate': false,
//   'examplesArray': [
//       {
//           'imgSrc': './img/lesson1.1/boy-icon.png',
//           'text': 'El niñ<span class="heavy-text">o</span> sdfasdf asds  sd fsd ds d',
//           'translatedText': 'The boy sdf sd',
//           'audioSrc': './audio/lesson1.1/1.mp3'
//       }
//       ,
//       {
//           'imgSrc': './img/lesson1.1/girl-icon.png',
//           'text': 'La niñ<span class="heavy-text">a</span>',
//           'translatedText': 'The girl',
//           'audioSrc': './audio/lesson1.1/2.mp3'
//       }
//   ] 
// },