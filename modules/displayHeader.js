
function displayHeader(obj, targetDom) {
    
    let targetDomDefault = document.querySelector('.lessonContainerBottom');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }

// console.log('displayHeader', targetDom, obj)

    let html = `
<div class="center">
    <h1>${obj}</h1>
</div>

    `
    targetDomDefault.innerHTML += html;
}

export default displayHeader