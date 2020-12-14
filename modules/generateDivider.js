export default function generateDivider(targetDom) {

    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    
    let html = `
    <div class="divider"></div>`

    targetDomDefault.innerHTML += html;

}