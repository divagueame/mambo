import moduleHeader from './moduleHeader.js'
import displayAudio from './displayAudio.js';

export default function wordsTable(obj, targetDom) {
  
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

let wordsTable = document.createElement('div');
obj.wordsArray.forEach((word,i,a) => {
  let wordDiv = document.createElement('div');
  wordDiv.classList.add('row');
  wordDiv.innerHTML = `
    <div class="col s12 m6 heavyText"><div class="wordsTable">${word.text}</div></div>
    <div class="col s12 m6"><div class="wordsTable">${word.translatedText}</div></div>
  `
  wordsTable.appendChild(wordDiv)
});
moduleContainer.appendChild(wordsTable)

//* <div id="audioContainer1" class="col s4 grey"></div> */
// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)





}