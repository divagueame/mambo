export default function generateBlockquote(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  
    // <!-- lesson header -->
    targetDomDefault.innerHTML +=
`    <div class="row blue">
     <div class="col s12 blue-grey darken-1 center-align">
       <div>
         <div class="white-text">
           <span class="card-title lessonHeaderText">1.1 Masculino o femenino</span>
         </div>
         </div>
       </div>
     </div>`
   
}