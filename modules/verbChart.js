import moduleHeader from './moduleHeader.js'

export default function verbChart(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");


let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])

let moduleContainer = document.createElement('div')
moduleContainer.classList.add('row')
let collapsibleUl = document.createElement("ul")
collapsibleUl.classList.add('collapsible','popout')
moduleContainer.appendChild(collapsibleUl)
let collapsibleLi = document.createElement("li")
if(obj['openOnInit']==true){
  collapsibleLi.classList.add('active')
}

let collapsibleHeaderColor = 'white'
if(obj['collapsibleHeaderColor']!=""){
  collapsibleHeaderColor = obj['collapsibleHeaderColor']
}
let collapsibleHeaderColorChange = 'lighten-1';
if(obj['collapsibleHeaderColorChange']!=""){
  collapsibleHeaderColorChange = obj['collapsibleHeaderColorChange']
}
const personas = ['yo', 'tú','el/ella/usted','nosotros/nosotras','vosotros/vosotras','ellos/ellas/ustédes']
let verbCounter = Object.values(obj['verbos']).length;
let collapsibleHeader = document.createElement('div')
collapsibleHeader.classList.add("collapsible-header",collapsibleHeaderColor,collapsibleHeaderColorChange)
collapsibleHeader.innerHTML = `<i class="material-icons">${obj['tableTriggerIcon']}</i>`
collapsibleHeader.innerHTML += obj['tableTriggerText']
let collapsibleBody = document.createElement('div')
collapsibleBody.classList.add("collapsible-body")

let table = document.createElement('table')
table.classList.add('striped')
let tableHead = document.createElement('thead')
let newTr =  document.createElement('tr');
let newTh =  document.createElement('th');
table.appendChild(tableHead)
tableHead.appendChild(newTr)
newTh.innerHTML = '<br>'
newTr.appendChild (newTh)
for(let i =0;i<verbCounter;i++){
  let verbNameTh =  document.createElement('th');
  newTr.appendChild(verbNameTh)
  verbNameTh.innerHTML = Object.keys(obj['verbos'])[i]
}

let tableBody = document.createElement('tbody');
table.appendChild(tableBody)
for(let i=0;i<6;i++){
  let newTr = document.createElement('tr');
  let personaTd = document.createElement('td');
  personaTd.innerHTML = personas[i]
  newTr.appendChild(personaTd)
  for(let j =0;j<verbCounter;j++){
    let verbFormTd =  document.createElement('td');
    newTr.appendChild(verbFormTd)
    verbFormTd.innerHTML = Object.values(obj['verbos'])[j][i]
  }
  tableBody.appendChild(newTr)
}
collapsibleBody.appendChild(table)
collapsibleLi.appendChild(collapsibleHeader)
collapsibleLi.appendChild(collapsibleBody)
collapsibleUl.appendChild(collapsibleLi)
moduleContainer.appendChild(collapsibleUl)




moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);
var elems = document.querySelectorAll('.collapsible');
M.Collapsible.init(elems, {});
}










/////SAMPLE OBJ
// {
//   'activityModuleType': 'verbChart',
//   'activityOrder': 2,
//   'moduleHeaderText' : '',
//   'moduleHeaderIcon': '', 
//   'moduleBasicText': '',
//   'showPersonas': true,
//   'openOnInit': false,    
//   'tableTriggerText': 'Verbos regulares',
//   'verbos': {
//       'estudiar': ['estud<span class="heavy-text">ie</span>','estud<span class="heavy-text">ies</span>','estud<span class="heavy-text">ie</span>', 'estud<span class="heavy-text">iemos</span>','estud<span class="heavy-text">iéis</span>', 'estud<span class="heavy-text">ien</span>'],
//       'comer': ['com<span class="heavy-text">a</span>','com<span class="heavy-text">as</span>','com<span class="heavy-text">a</span>', 'com<span class="heavy-text">amos</span>','com<span class="heavy-text">áis</span>', 'co<span class="heavy-text">man</span>'],
//       'escribir': ['escrib<span class="heavy-text">a','escrib<span class="heavy-text">as</span>','escrib<span class="heavy-text">a</span>', 'escrib<span class="heavy-text">amos</span>','escrib<span class="heavy-text">áis</span>', 'escrib<span class="heavy-text">an</span>']
//  }
// },