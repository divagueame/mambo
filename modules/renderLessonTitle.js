export default function renderLessonTitle(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // console.log("aqui", obj)
    // <!-- lesson header -->
    targetDomDefault.innerHTML +=
`    <div class="row blue">
     <div class="col s12 blue-grey darken-1 center-align">
       <div>
         <div class="white-text">
           <span class="card-title lessonHeaderText">${obj.title}</span>
         </div>
         </div>
       </div>
     </div>`
   
}