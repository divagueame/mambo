
function missingWordsParagraph(obj, targetDom) {
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    //Initial opening tags and activity header
    let html = `
    <blockquote class="activityHeader valign-wrapper">
        ${obj.activityHeaderText}
    </blockquote>`
  
    html += `<div id="helptags">HELPER</div>
        <div class="row justified">
        <div class="col s8 offset-s2 teal lighten-5 z-depth-1">
        <form id="missingwordsform"><p>`

    //Create the text and deploy textboxes
    let text = obj.paragraphText;

    html += text;



    //Closing the tags
    html += `</p></div></div>`

        //Add the submit button
        html += `
        <div class="row justified">
        <div class="col s8 offset-s2 white">
        <button class="btn waves-effect waves-light right" type="submit" name="answersSubmit">Corregir
        <i class="material-icons right">send</i>
        </button></form>
        </div></div>`;

        
        targetDomDefault.innerHTML += html;
    
    
    //Subtitute answers for input forms and get the right answers in an array
    let selectAll = document.querySelectorAll(".guessWord")
    let correctAnswersArray = []
    selectAll.forEach(function(e,a, i){
        correctAnswersArray.push(e.innerHTML)
        e.innerHTML = `
            <div class="input-field inline">
                <input id="correctAnswer${e.innerHTML}" type="text" required  size="5" class="input-field-corrected-wrong">
            </div>`
    })
    
      // Set word crosser helper
      if(obj['helptags']==true){
        //Open container
        let theseHelptags = `<div class="white center">`;

        //Function to shuffle the answers
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        // Copy answers to a new array
        let shuffledAnswers = [];
        correctAnswersArray.forEach(e=>{
            shuffledAnswers.push(e)
        })
        //Shuffling answers and adding divs
        shuffleArray(shuffledAnswers)
        shuffledAnswers.forEach(function(answer,i,a){
            let divText = 
                `<div class="chip clickable" id="chipNumber${i}">
                    ${answer}
                </div>`;
                theseHelptags += divText 
        })
        
        theseHelptags += `</div>`
    
        let helptagsContainer = document.getElementById("helptags");
        helptagsContainer.innerHTML = theseHelptags;
        //Add eventlisteners for the chips to toggle class .chipCrossedOut
        correctAnswersArray.forEach(function(answer,i,a){

            console.log("S")
            let thisId = `chipNumber${i}`;
            let selectChip = document.getElementById(thisId);
            selectChip.addEventListener('click',(e)=>{
                selectChip.classList.toggle('chipCrossedOut')
            })
        })

    }

    //When submit, check the correct answers
    const thisForm = document.getElementById('missingwordsform');
    thisForm.addEventListener('submit',function(e){
        e.preventDefault();
        console.log("CORECT ",correctAnswersArray)
           
        for (let i = 0; i < (thisForm.length-1); i++) {
        
        if((thisForm.elements[i].value).toLowerCase()==correctAnswersArray[i].toLowerCase()){
            console.log("RIGHT ANSWER")
            // console.log("Right answer is: ", correctAnswersArray[i])
        }else{
            console.log("Wrong ANSWER")
            // console.log("User wrote: ",i, thisForm.elements[i].value);
            // console.log("Right answer is: ", correctAnswersArray[i])
        }

        }



    })

}

export default missingWordsParagraph