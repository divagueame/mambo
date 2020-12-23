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
let moduleContainer = document.createElement('div')
// moduleContainer.classList.add("row");

moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);

targetDomDefault.appendChild(moduleDiv);

let wordRow = document.createElement('table')
wordRow.classList.add('center')
wordRow.classList.add('container');
wordRow.classList.add('GeneratedTable');

wordRow.innerHTML = `
<tbody>
<tr>
  <td>${obj.wordsArray[0].text}</td>
  <td>${obj.wordsArray[0].translatedText}</td>
</tr>
<tr>
  <td>Cell</td>
  <td>Cell</td>
</tr>
</tbody>


`
// wordRow.innerHTML = 
// `
// <table style="width: 100%;" border="3" cellpadding="22">
// <tbody>
//   <tr>
//     <td class="blue">${obj.wordsArray[0].text}</td>
//     <td class="orange">${obj.wordsArray[0].translatedText}</td>
//   </tr>
//   <tr>
//     <td class="blue">sdfsdfsdfsdfsd${obj.wordsArray[0].text}</td>
//     <td class="orange">${obj.wordsArray[0].translatedText}</td>
//   </tr>
//   <tr>
//     <td class="blue">sdfsd sdf${obj.wordsArray[0].text}</td>
//     <td class="orange">sdfsdf sdsd${obj.wordsArray[0].translatedText}</td>
//   </tr>
// </tbody>
// </table>`
moduleContainer.appendChild(wordRow)

//* <div id="audioContainer1" class="col s4 grey"></div> */
// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)





}