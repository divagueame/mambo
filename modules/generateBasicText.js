import moduleHeader from './moduleHeader.js'
import displayAudio from './displayAudio.js';

export default function generateBasicText(obj, targetDom) {
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
// moduleContainer.innerHTML = `
// <p class="justified">As a general rule, male nouns end by -o and female nouns end by -a.
// <p class="examples"><span class="heavyText">Male nouns:</span>  el edificio, el boligrafo, el dinero, el vaso...</p>
// <p  class="examples"><span class="heavyText">Female nouns: </span>la casa, la mesa, la taza, la ventana... </p>
// <p class="">It's important to remember the gender of the words as other elements related to them will agree accordingly.</p>
// <div class="divider"></div>
// `; 
let imagesArray = obj['images'];
let imagesPosition = obj['imagesPosition'];
console.log("Ye", (imagesArray),imagesPosition)
moduleContainer.innerHTML = ``
obj['paragraphs'].forEach((p,i) => {
  let highlightClass = ""
  if(obj['highlightedParagraphs'][i]){
    highlightClass = "highlightP"
  }
  
  
  if(imagesArray[i]!=""){
    //Paragraph with image
    let thisImgSrc = imagesArray[i];
    let positionClassImg = "push-s8 push-l9"
    let positionClassP = "pull-s4 pull-l3";
    console.log()
    if(imagesPosition[i]=="left"){
      positionClassImg ="";
      positionClassP = ""
    }
  
    moduleContainer.innerHTML += `
    <div class="row">
    <div class="col s4 l3 ${positionClassImg}">
    <img src="${thisImgSrc}" class="img-responsive">
    </div>
      <div class="col s8 l9 ${positionClassP}">
        <p class="justified text-flow ${highlightClass}">${p}</p>
      </div>
    </div>`
  }
  else{//Paragraph with no image
  moduleContainer.innerHTML += `
  <div class="row">
    <div class="col s12">
      <p class="justified text-flow ${highlightClass}">${p}</p>
    </div>
  </div>`
  }
 
});




moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);
//* <div id="audioContainer1" class="col s4 grey"></div> */

// <div id="audioContainer2" class="blue"></div>
let audio1 = `audio/lesson1/1.mp3`;
let audio2 = `audio/lesson1/2.mp3`;
let audioContainer1 = document.querySelector("#audioContainer1")
let audioContainer2 = document.querySelector("#audioContainer2")

// displayAudio(audio1,audioContainer1)
// displayAudio(audio2,audioContainer2)





}









/////SAMPLE OBJ
// {
//   'activityModuleType': 'generateBasicText',
//   'activityOrder': 2,
//   'moduleHeaderText':  '1. La Reina de la Salsa - Celia Cruz',
//   'moduleHeaderIcon': 'account_box',
//   'paragraphs': 
// [
// 'Paragraph 1.',
// 'Paragraph 2',
// 'Paragraph 3',
// ],
// 'highlightedParagraphs': [false,false,false],
// 'images': ['','./lessons/3.1/img/celia.jpg','./lessons/3.1/img/woman.jpg'],
// 'imagesPosition': ['','','left']
// },