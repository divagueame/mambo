import moduleHeader from './moduleHeader.js';
import displayAudio from './displayAudio.js';

export default function examplesCard(obj, targetDom) {

      

    console.log("ExamplesCard init");
    console.log("BLANK SENTENCEs")
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
//   moduleContainer.classList.add("z-depth-1");
  moduleContainer.classList.add("row");

    
moduleContainer.innerHTML= `
<div class="col s8 offset-s2 m4 l4 offset-l4">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${obj.examplesArray[0].text}</span>
      <img src="${obj.examplesArray[0].imgSrc}" class="responsive-img">
    </div>
    <div class="card-action">
    <span class="card-title">${obj.examplesArray[0].text}</span>
    </div>
  </div>
</div>


`

// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)




  moduleDiv.appendChild(moduleHeaderDiv);
  moduleDiv.appendChild(moduleContainer);
  targetDomDefault.appendChild(moduleDiv);


}