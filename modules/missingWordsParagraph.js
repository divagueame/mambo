
function missingWordsParagraph(obj, targetDom) {
    
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }

// console.log('missingWordParagrah', obj)

    let html = `
    `
    targetDomDefault.innerHTML += html;
}

export default missingWordsParagraph