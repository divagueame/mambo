export default function examplesCard(obj, targetDom) {
    console.log("ExamplesCard init");

    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    
    

let html = `



<div class="row">

      </div>
`

targetDomDefault.innerHTML += html;


}