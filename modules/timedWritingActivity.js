import moduleHeader from './moduleHeader.js'

export default function wildCard(obj, targetDom) {
  console.log("YES")
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");

let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])
let moduleContainer = document.createElement('div')

let timerDiv = document.createElement('div')
timerDiv.classList.add("red")
let timerSpan = document.createElement("span")
timerSpan.classList.add("orange")
timerSpan.innerHTML = 22
moduleContainer.innerHTML = "POLIS"


moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);


}