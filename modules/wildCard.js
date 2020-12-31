import moduleHeader from './moduleHeader.js'

export default function wildCard(obj, targetDom) {
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");

let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])

let moduleContainer = document.createElement('div')

moduleContainer.innerHTML = obj['html']


moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);


}