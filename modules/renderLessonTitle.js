export default function renderLessonTitle(obj, targetDom) {
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }


var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
let html = `
<div class="row blue">
<div class="col s12 blue-grey darken-1 center-align">
  <div>
    <div class="white-text">
      <span class="card-title lessonHeaderText">${obj.title}</span>
    </div>
    </div>
  </div>
</div>`
moduleDiv.innerHTML = html
moduleDiv.addEventListener("click", function () {
    alert('click');
});

targetDomDefault.appendChild(moduleDiv);


// Create the new element
// var moduleDiv = document.createElement('div');
// // <!-- lesson header -->
// let moduleDivNode = document.createTextNode(`
// <div class="row blue">
// <div class="col s12 blue-grey darken-1 center-align">
//   <div>
//     <div class="white-text">
//       <span class="card-title lessonHeaderText">${obj.title}</span>
//     </div>
//     </div>
//   </div>
// </div>`);
// moduleDiv.appendChild(moduleDivNode)
// targetDomDefault.appendChild(moduleDiv);

// Insert the element after our target element
// targetDomDefault.parentNode.insertBefore( moduleDiv, targetDomDefault );


   
}