function missingWordsParagraph(obj, targetDom) {
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }


    var moduleDiv = document.createElement('div');
    moduleDiv.classList.add("moduleDiv");
//     //Initial opening tags and activity header
    let html = `
    <blockquote class="activityHeader valign-wrapper">
        <i class="material-icons black-text">create</i> 
        ${obj.activityHeaderText}
    </blockquote>`
//   //Add helptags container
    html += `
    <div class="row center" id="helptagsTriggerContainer"><div class=" valign-wrapper col s2 offset-s8"><i id="helptagsTrigger" class="clickable material-icons small z-depth-0 hoverable">help_outline</i></div></div>
    <div id="helptags"></div>
                <form id="missingwordsform" autocomplete="off">   
            <div class="row justified valign-wrapper">
            
            <div class="col s4">
            <img class="responsive-img z-depth-1" src="${obj.sideImgLocation}">
            </div>
            <div class="col s7 teal lighten-5 z-depth-1">
            <p class="paragraphExerciseTextP">`
//     //Create the text and deploy textboxes
    let text = obj.paragraphText;
    html += text;

//     // Closing the tags and Add the submit button
    html += `</div></div>
       </p>
    <div class="row">
    <div class="col s12 white removeRightPadding">
        <button class="btn waves-effect waves-light right " type="submit" name="answersSubmit">Corregir<i class="material-icons right">school</i>
        </button>

        </div>
    </div> 
        
        <div class="row" id="answersContainer"></div></form>`;
 moduleDiv.innerHTML = html
 

// targetDomDefault.insertAdjacentHTML("afterend", html);

targetDomDefault.appendChild(moduleDiv);


// //     //Subtitute answers for input forms and get the right answers in an array
    let selectAll = document.querySelectorAll(".guessWord")
    let correctAnswersArray = [];
    let widthPerLetter = 0.9;

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
    // console.log("e es",inputDivToAdd);
    // e.appendChild(inputDivToAdd);
    // parentDiv.insertBefore(sp1, sp2)
    // e.insertAdjacentHTML('afterend', inputDivToAdd);
        // e.textContent = '';
        // console.log(e)

      
        
// Get the parent element
let parentDiv = e.parentNode

// Insert the new element into before sp2
parentDiv.insertBefore(inputDivToAdd, e)
e.innerHTML = ``


    });

/// Set word crosser helper
      if(obj['helptags']==true){
        let triggerDom = document.getElementById('helptagsTrigger');
        triggerDom.addEventListener('click', function(){
          deployHelpTags()
        })
      }


        
        function deployHelpTags(){
        let theseHelptags = `<div class="row center"><div class="col s7 offset-s5 center">`;

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
            let divText = 
                `<div class="chip clickable" id="chipNumber${i}">
                    ${answer}
                </div>`;
                theseHelptags += divText 
        });
        theseHelptags += `</div></div>`
    
        let helptagsContainer = document.getElementById("helptags");
        helptagsContainer.insertAdjacentHTML("afterend", theseHelptags);
        let triggercontainer = document.getElementById('helptagsTriggerContainer');
        triggercontainer.innerHTML= '';
        



        // //Add eventlisteners for the chips to toggle class .chipCrossedOut
        correctAnswersArray.forEach(function(answer,i,a){
            let thisId = `chipNumber${i}`;
            let selectChip = document.getElementById(thisId);
            selectChip.addEventListener('click',(e)=>{
                selectChip.classList.toggle('chipCrossedOut')
            })
        // })
        // }
    })

}

//     //When submit, check the correct answers
    const thisForm = document.getElementById('missingwordsform');
    let userAnswers = []
    thisForm.addEventListener('submit',function(e){
        e.preventDefault();

        for (let i = 0; i < (thisForm.length-1); i++) {
        if((thisForm.elements[i].value).toLowerCase()==correctAnswersArray[i].toLowerCase()){
            // console.log("RIGHT ANSWER")
            userAnswers.push(true)
        }else{
            // console.log("Wrong ANSWER")
            userAnswers.push(false);
        }
        }

        let inputTextinParagraphSelectors = document.querySelectorAll(".inputTextinParagraph");

        inputTextinParagraphSelectors.forEach((hiddenWord,i,a)=>{
        // console.log("USER ", spanSelectors[i])
            if(userAnswers[i]==true){
                hiddenWord.classList.add("guessWordRight");
            // console.log("YESSSS")
            } else {
                hiddenWord.classList.add("guessWordWrong")
                // console.log("NOOOO")
            }

    })

//         let paragraphExerciseTextP = document.querySelector(".paragraphExerciseTextP")
//         paragraphExerciseTextP.innerHTML = obj.paragraphText;


//         })



        // let answersSummary = document.querySelector('#answersContainer');
        // answersSummary.innerHTML = `<div class="col s12 grey">CORRECTED</div>`
    })

    
    
}

export default missingWordsParagraph