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
moduleDiv.innerHTML = `
<h3 class="valign-wrapper"><i class="material-icons">star</i><span> 1.1 Male and female nouns. El vs. La</span></h3>
<p class="justified">As a general rule, male nouns end by -o and female nouns end by -a. Male nouns:  el edificio, el boligrafo, el dinero, el vaso... Female nouns: la casa, la mesa, la taza, la ventana... It's important to remember the gender of the words as other elements related to them will agree accordingly. 
</p>
<br>
<div class="divider"></div>
`; 


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