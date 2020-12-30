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
let table = document.createElement('table')
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
// personasDiv.classList.add('col','s2', 'brown', 'lighten-4');

moduleContainer.appendChild(table)

// table.innerHTML = `
// 	<caption>Table 1</caption>
// 	<thead>
// 	<tr>
// 		<th><br></th>
// 		<th>Comer</th>
// 		<th>Vivir3</th>
// 		<th>Header 4</th>
// 	</tr>
// 	</thead>
// 	<tbody>
// 	<tr>
// 		<td>Yo</td>
// 		<td>&nbsp;1</td>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 	</tr>
// 	<tr>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;2</td>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 	</tr>
// 	<tr>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;3</td>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 	</tr>
// 	<tr>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;5</td>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 	</tr>
// 	<tr>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 	</tr>
// 	<tr>
// 		<td>&nbsp;</td>
// 		<td>&nbsp;</td>
// 		<td>&sd;</td>
// 		<td>sd</td>
// 	</tr>
// 	<tbody>
// `; 

moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);

}