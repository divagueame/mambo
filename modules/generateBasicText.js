import displayAudio from './displayAudio.js';

export default function generateBasicText(obj, targetDom) {
  console.log("GENERATE BASIC")

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
// moduleDiv.classList.add("container");
moduleDiv.innerHTML = `
<h3 class="valign-wrapper"><i class="material-icons">star</i><span> 1.1 section setionc sdf asd fasd</span></h3>

  <p class="justified">Bloremrema e loremlorem dsfa sdfasdfasdfdsf asd fasd f loremlLOremn lorem lLOremnlor emlLO remn loremlLOr emnloremlLOre m  nas

  
</p>
<br>
<br>
<br>
<br>
<div class="row">
<div id="audioContainer1" class="col s4 grey"></div>
</div>
<br>
<div id="audioContainer2" class="blue"></div>


<br>
<br>
</br></br>
`; 


targetDomDefault.appendChild(moduleDiv);

let audio1 = `audio/lesson1/1.mp3`;
let audio2 = `audio/lesson1/2.mp3`;
let audioContainer1 = document.querySelector("#audioContainer1")
let audioContainer2 = document.querySelector("#audioContainer2")

displayAudio(audio1,audioContainer1)
displayAudio(audio2,audioContainer2)





}