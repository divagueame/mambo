export default function renderLessonTitle(obj, targetDom) {
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }


var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");


let html = `
<div class="row">
  <img src="${obj.lessonTopImageSrc}" class="img-responsive col s2 offset-s5">
</div>
<div class="center">
  <h1 class="col s12 offset-s2 center myH1 removeTopMargin">${obj.title}</h1>
</div>
`
moduleDiv.innerHTML = html

targetDomDefault.appendChild(moduleDiv);

}