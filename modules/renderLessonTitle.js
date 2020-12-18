export default function renderLessonTitle(obj, targetDom) {
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }


var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");


let html = `<h1 class="center myH1">${obj.title}<h1>`
moduleDiv.innerHTML = html

targetDomDefault.appendChild(moduleDiv);

}