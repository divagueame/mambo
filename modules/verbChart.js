import moduleHeader from './moduleHeader.js'
import displayAudio from './displayAudio.js';

export default function verbChart(obj, targetDom) {

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
moduleContainer.classList.add('row')

const personas = ['yo', 'tú','el/ella/usted','nosotros/nosotras','vosotros/vosotras','ellos/ellas/ustedes']
let verbCounter = Object.values(obj['verbos']).length;
let personasDiv = document.createElement('div')
let personasUl = document.createElement('ul')
personas.forEach(function(persona){
  let newLi = document.createElement('li')
  newLi.innerHTML = persona
  personasUl.appendChild(newLi)
})
personasDiv.classList.add('col','s2', 'brown', 'lighten-4');
personasDiv.appendChild(personasUl)
moduleContainer.appendChild(personasDiv)

moduleContainer.innerHTML = `
<p class="justified">Verbcharrt</p>
<div class="divider"></div>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

`; 

moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);

}