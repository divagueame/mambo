export default function introConcept(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");

moduleDiv.innerHTML = `    
    <div class="row">
    <div class="col  center-align">
      <div class="card">
        <div class="card-content black-text">
          <span class="card-title">${obj.cardTitle}</span>
          <p>${obj.cardContent}</p>
        </div>
        <div class="card-action">
          <a href="#"><i class="tiny material-icons">translate</i></a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>`;

// Insert the element after our target element
// targetDomDefault.parentNode.insertBefore( moduleDiv, targetDomDefault );

targetDomDefault.appendChild(moduleDiv);
}