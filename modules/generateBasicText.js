import moduleHeader from './moduleHeader.js'
import displayAudio from './displayAudio.js';

export default function generateBasicText(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
moduleDiv.classList.add("section");
// moduleDiv.classList.add("container");
let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])

let moduleContainer = document.createElement('div')
moduleContainer.innerHTML = `
<p class="justified">As a general rule, male nouns end by -o and female nouns end by -a.
<p class="examples"><span class="heavyText">Male nouns:</span>  el edificio, el boligrafo, el dinero, el vaso...</p>
<p  class="examples"><span class="heavyText">Female nouns: </span>la casa, la mesa, la taza, la ventana... </p>
<p class="">It's important to remember the gender of the words as other elements related to them will agree accordingly.</p>
<div class="divider"></div>
`; 

moduleDiv.appendChild(moduleHeaderDiv);
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