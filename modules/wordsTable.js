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
if(obj.section==true){moduleDiv.classList.add("section");}
if(obj.moduleHeaderText!=""){
  let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])
  moduleDiv.appendChild(moduleHeaderDiv);
}
let moduleContainer = document.createElement('div');
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);

let wordsTable = document.createElement('div');

obj.wordsArray.forEach((word,i,a) => {
  let wordDiv = document.createElement('div');
  wordDiv.classList.add('row');
    let col1Div = document.createElement('div');
    col1Div.classList.add("col")
    col1Div.classList.add("s12")
    col1Div.classList.add("m6")
    col1Div.classList.add("heavyText");
    col1Div.innerHTML = `<div class="wordsTable"><span>${word.text}</span></div>`

    let col2Div = document.createElement('div');
    col2Div.classList.add("col")
    col2Div.classList.add("s12")
    col2Div.classList.add("m6")
    col2Div.innerHTML = `<div class="wordsTable">${word.translatedText}</div>`;

  wordDiv.appendChild(col1Div)
  wordDiv.appendChild(col2Div)
  wordsTable.appendChild(wordDiv);

    let thisAudioSrc = ""
  if(word.audioSrc!=""){
    thisAudioSrc = word.audioSrc;
    let audioElement = displayAudio(thisAudioSrc)
    col1Div.firstChild.insertBefore(audioElement, col1Div.firstChild.firstChild);
    // col1Div.firstChild.appendChild(audioElement)

  }
});
moduleContainer.appendChild(wordsTable)

//* <div id="audioContainer1" class="col s4 grey"></div> */
// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)





}