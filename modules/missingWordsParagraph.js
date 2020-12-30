import moduleHeader from './moduleHeader.js'
function missingWordsParagraph(obj, targetDom) {
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }

    var moduleDiv = document.createElement('div');
    moduleDiv.classList.add("moduleDiv");
    let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon']);
    let moduleContainer = document.createElement('div');
//     //Initial opening tags and activity header
let randomId = Math.floor(Math.random()*100000);
    let html = `<div id="helptags${randomId}" class="row removeBottomMargin"></div>
            <form id="missingwordsform${randomId}" autocomplete="off">   
            <div class="row ">
            <div class="col s12 m4 removeLeftPadding">
            <img class="responsive-img" src="${obj.sideImgLocation}">
            </div>
            <div class="col s12 m8 lighten-5">
            <p class="paragraphExerciseTextP justified flow-text">`
//     //Create the text and deploy textboxes
    let text = obj.paragraphText;
    html += text;

//     // Closing the tags and Add the submit button
    html += `</div></div>
       </p>
    <div class="row">
    <div class="col s12 removeRightPadding">
        <button id='submitButtonMissingWordsParagraph${randomId}' class="btn waves-effect waves-light right blue-grey darken-2" type="submit" name="answersSubmit">Corregir<i class="material-icons right">school</i>
        </button>
         <div class="right addRightMargin btn" id="helptagsTriggerContainer${randomId}"><span id='helptagsTrigger${randomId}'>Ayuda</span></div>        
        </div>
    </div> 
        <div class="row" id="answersContainer${randomId}"></div></form>`;
        moduleContainer.innerHTML = html

moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);



// //     //Subtitute answers for input forms and get the right answers in an array
    let selectAll = moduleContainer.querySelectorAll(".guessWord")
    let correctAnswersArray = [];

    selectAll.forEach(function(e,i,a){
    let widthPerLetter = .802
    let thisWidth = selectAll[i].innerHTML.length * widthPerLetter * getRandom();

    function getRandom(){
        for(let i=0;i<1000;i++){
            let ran = Math.random();
            if(ran>0.68){
                return 0.16 + ran
            }
        }
    }

        correctAnswersArray.push(e.innerHTML);
        let inputDivToAdd =  document.createElement('div');
        inputDivToAdd.classList.add('input-field')
        inputDivToAdd.classList.add('inline')
        inputDivToAdd.classList.add('inputTextinParagraphExerciseContainer')  
        inputDivToAdd.innerHTML =` 
                <input id="correctAnswer${e.innerHTML}${i}" type="text" required class="input-field-corrected-wrong inputTextinParagraph" style="width: ${thisWidth}rem">
            `   

// Get the parent element
let parentDiv = e.parentNode
// Insert the new element into before sp2
parentDiv.insertBefore(inputDivToAdd, e)
e.innerHTML = ``

    });

/// Set word crosser helper
      if(obj.helptags==true){
        let triggerDom = document.getElementById(`helptagsTrigger${randomId}`);
        triggerDom.addEventListener('click', function(){
          deployHelpTags()
        })
      }

        function deployHelpTags(){
        let theseHelptags = document.createElement("div");
        theseHelptags.classList.add('col');
        theseHelptags.classList.add('s8');
        theseHelptags.classList.add('offset-s4');
        let centerDiv = document.createElement("div");
        centerDiv.classList.add('center');
        theseHelptags.appendChild(centerDiv)

        
        // //Function to shuffle the answers
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        // // Copy answers to a new array
        let shuffledAnswers = [];
        correctAnswersArray.forEach(e=>{
            shuffledAnswers.push(e)
        })
        // //Shuffling answers and adding divs
        shuffleArray(shuffledAnswers)
        shuffledAnswers.forEach(function(answer,i,a){

            let divTag = document.createElement("div");
            divTag.id = `chipNumber${i}`;
            divTag.classList.add("chip")
            divTag.classList.add("clickable")
            divTag.innerHTML = `${answer}`;
            centerDiv.appendChild(divTag)
        });
        let helptagsContainer = document.getElementById(`helptags${randomId}`);
        helptagsContainer.appendChild(theseHelptags)

        let triggercontainer = document.getElementById(`helptagsTriggerContainer${randomId}`);
        triggercontainer.classList.add('disabled');

        // //Add eventlisteners for the chips to toggle class .chipCrossedOut
        correctAnswersArray.forEach(function(answer,i,a){
            let thisId = `chipNumber${i}`;
            let selectChip = document.getElementById(thisId);
            selectChip.addEventListener('click',(e)=>{
                selectChip.classList.toggle('chipCrossedOut')
            });
    })
}

//     //When submit, check the correct answers
    const thisForm = document.getElementById(`missingwordsform${randomId}`);
    let userIsRight = [];
    let userAnswersText = [];
    const submitButtonMissingWordsParagraph = document.getElementById(`submitButtonMissingWordsParagraph${randomId}`);
    // const buttonSelector = document.getElementById('submitButtonMissingWordsParagraph')
    thisForm.addEventListener('submit', function(e){
        e.preventDefault();

        let innerRandomId = Math.floor(Math.random()*100000);
        submitButtonMissingWordsParagraph.classList.add('disabled');
        let helptagsTriggerContainer = moduleContainer.querySelector(`#helptagsTriggerContainer${randomId}`)
        helptagsTriggerContainer.classList.add('disabled');
        
        let counterRight = 0;
        let counterWrong = 0;
        
        for (let i = 0; i < (thisForm.length-1); i++) {
        if((thisForm.elements[i].value).toLowerCase()==correctAnswersArray[i].toLowerCase()){
            // console.log("RIGHT ANSWER")
            userIsRight.push(true);
            userAnswersText.push(correctAnswersArray[i]);
        }else{
            // console.log("Wrong ANSWER")
            userIsRight.push(false);
            userAnswersText.push(thisForm.elements[i].value);
        }
        }

        let inputTextinParagraphSelectors = moduleContainer.querySelectorAll(".inputTextinParagraph");
        
        inputTextinParagraphSelectors.forEach((hiddenWord,i,a)=>{
        // console.log("USER ", inputTextinParagraphSelectors[i].value)
            if(userIsRight[i]==true){
                hiddenWord.classList.add("guessWordRight");
                selectAll[i].classList.add("guessWordRight");
                counterRight++
            // console.log("YESSSS")
            } else {
                hiddenWord.classList.add("guessWordWrong");
                // console.log(selectAll[i],"sd")
                selectAll[i].classList.add("guessWordWrong");
                counterWrong++
                // console.log("NOOOO")
            }
    });
    let result = (counterRight + "/" + (counterRight+counterWrong))
    let correctionMessage = `Has acertado: ${result}`
    M.toast({html: correctionMessage, displayLength: 5000 ,classes: 'rounded'});


        //////////Restore the values of inputo to the right answer
    correctAnswersArray.forEach(function(e,i,a){
        let selectInput = `correctAnswer${e}${i}`
        selectInput = moduleContainer.querySelector(`#${selectInput}`);
        selectInput.innerHTML =  e;
        selectInput.classList.add("hide");
        selectAll[i].innerHTML = e;
        if(!userIsRight[i]){
            selectAll[i].classList.add("tooltipped");
            selectAll[i].setAttribute('data-position', 'top');
            selectAll[i].setAttribute('data-tooltip', `${userAnswersText[i]}`);
        }
    })

    var elems = document.querySelectorAll(`.tooltipped`);
    // console.log(elems)
    M.Tooltip.init(elems, {});

    })

    
    
}

export default missingWordsParagraph