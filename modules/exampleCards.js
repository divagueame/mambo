import moduleHeader from './moduleHeader.js';
import displayAudio from './displayAudio.js';

export default function examplesCard(obj, targetDom) {

      
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
  moduleContainer.classList.add("row");
//   let moduleContainerCol = document.createElement('div');
// moduleContainerCol.classList.add("row");
  //Column sizes for 1,2,3 and 4 examples elements
  // if(obj.examplesArray.length==1){
  //   moduleContainerCol.classList.add('col', 's8', 'offset-s2', 'm4', 'l4', 'offset-l4')
  // }
  // if(obj.examplesArray.length==2){
  //   // moduleContainerCol.classList.add('col', 's8', 'offset-s2', 'm4', 'l4', '2offset-l1')
  //   moduleContainerCol.classList.add('col', 's12')
  // }
  // if(obj.examplesArray.length==3){
  //   moduleContainerCol.classList.add('col', 's8', 'offset-s2', 'm4', 'l4', 'offset-l4')
  // }
  // if(obj.examplesArray.length==4){
  //   moduleContainerCol.classList.add('col', 's8', 'offset-s2', 'm4', 'l4', 'offset-l4')
  // }
  
  moduleContainer.innerHTML = ``
  obj.examplesArray.forEach(function(example,i,a){



    let exampleDiv = document.createElement('div');
    exampleDiv.classList.add("card", "blue-grey", "darken-1")

    if(obj.examplesArray.length==1){
      exampleDiv.classList.add('col', 's8', 'offset-s2', 'm4', 'l4', 'offset-l4')
    }
    if(obj.examplesArray.length==2){
      exampleDiv.classList.add('col', 's5', 'offset-s1', 'm4', 'offset-m1','l4', 'offset-l1')
    }
    if(obj.examplesArray.length==3){
      exampleDiv.classList.add('col', 's8', 'offset-s2', 'm4', 'l4', 'offset-l4')
    }
    if(obj.examplesArray.length==4){
      exampleDiv.classList.add('col', 's8', 'offset-s2', 'm4', 'l4', 'offset-l4')
    }


    let randomId = Math.floor(Math.random()*100000);
    exampleDiv.innerHTML+= `
      <div class="card-content white-text">
        <img src="${example.imgSrc}" class="responsive-img">
      </div>
      <div class="card-action white-text center" id="exampleAudioId${randomId}">
        <span class="card-title" >${example.text}</span>
      </div>
  `

  moduleContainer.appendChild(exampleDiv)
  })


  moduleDiv.appendChild(moduleHeaderDiv);
  moduleDiv.appendChild(moduleContainer);
  // moduleContainer.appendChild(moduleContainerCol)
  targetDomDefault.appendChild(moduleDiv);


  //Add audio buttons
  // const selectAudioContainer = document.querySelector(`#exampleAudioId${randomId}`);
  // let audioSrc = obj.examplesArray[0].audioSrc
  // displayAudio(audioSrc,selectAudioContainer)

}