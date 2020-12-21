function tutorWritingActivity(obj, targetDom) {
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }

    var moduleDiv = document.createElement('div');
    moduleDiv.classList.add("moduleDiv");
    
    let moduleTitle = document.createElement('div');
    
    moduleTitle.innerHTML = `<h6 class="activityHeader valign-wrapper"><i class="material-icons small">forward</i>1.1 ${obj.activityHeaderText}</h6>`;
    moduleDiv.appendChild(moduleTitle);



let suggestionTrigger = document.createElement('button');
suggestionTrigger.classList.add("btn")
suggestionTrigger.classList.add("blue-grey")
suggestionTrigger.innerHTML = 'Give me an idea'

function triggerPrompt(){
    let totalWords = obj.promptsArray.length;
    let chooseRandomWord = Math.floor(totalWords*Math.random());

    let randomImg = `${obj.promptsArray[chooseRandomWord]['imgSrc']}`;
    let randomImgDiv = ``
    if (randomImg){
        randomImgDiv = `<img class="hint-toast-img" src="${randomImg}"></img>`
    }  else {
        ` `
    }
    let randomWord = `${obj.promptsArray[chooseRandomWord]['word']}`;
    
    let toastie = `
    <div class="toastie-container">
    ${randomImgDiv}
        <h6 class="center">${randomWord}</h6><div>`
    M.toast({html: toastie, 'displayLength': 6500, outDuration: 5000, classes: 'white z-depth-0 black-text'})
}

suggestionTrigger.addEventListener('click', triggerPrompt)

moduleDiv.appendChild(suggestionTrigger);


///


var userTextArea = document.createElement('div');

userTextArea.innerHTML = `
</form>
<div class="row">
  <form id="userTextForm" class="col s12">
    <div class="row">
      <div class="input-field col s12 white input-row">
        <textarea class="materialize-textarea" data-length="120" name="input1" id="textarea2"></textarea>
        <label for="textarea2" class="black-text">Your text...</label>
      </div>
    </div>
    <button class="btn" type="submit">Submit it</button>
  </form>
</div>
      `
      moduleDiv.appendChild(userTextArea)

      
    var currentStatus = document.createElement('div');
    currentStatus.innerHTML = `
    Current status: The assignment has not yet been handed in.`

    moduleDiv.appendChild(currentStatus)


'<textarea placeholder="Remember, be nice!" cols="30" rows="5"></textarea>'
    targetDomDefault.appendChild(moduleDiv);

    const userTextForm = document.querySelector('#userTextForm');
    userTextForm.addEventListener('submit',e=>{
        e.preventDefault();
        console.log(userTextForm.elements[0].value)
    })
  
    
const textNeedCount = document.querySelector('#textarea2');
const textNeedCountInstance = new M.CharacterCounter(textNeedCount);
   
    
}

export default tutorWritingActivity