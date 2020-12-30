import renderLesson from './renderLesson.js';

const auth = firebase.auth();
const db = firebase.firestore();
// setTimeout(lessonActivitiesDb,800)


const commonActivitiesSettings = {
  // 'activityModuleType': '',
  'activityOrder': 0,
  'moduleHeaderText' : ' ',
  'moduleHeaderIcon': '',
  'moduleBasicText': '',
  // 'section': false
}

const activityTypesTemplates = {
  'renderLessonTitle': {
    'title': "M",
    'lessonTopImageSrc': ''
},
  'missingWordsParagraph': {
    'paragraphText': 'Initial sample text <span class="guessWord">guessword</span>. Great job.', 
    'activityHeaderText': 'Activityy header explanation',
    'sideImgLocation': 'img/lesson1.1/kitty.jpg',
    'helptags': true,
    'autoShowHelptags': true
},
  'exampleCards': {
    'autoShowTranslate': false,
    'examplesArray': [
        {
            'imgSrc': './img/lesson1.1/book.jpg',
            'text': 'Texto ejemplo 1',
            'translatedText': 'Translated text',
            'audioSrc': ''
        }
        ,
        {
            'imgSrc': './img/lesson1.1/boy.jpg',
            'text': 'Example with span<span class="heavy-text">a</span>',
            'translatedText': 'La chica traducida',
            'audioSrc': './audio/lesson1.1/2.mp3'
        }
    ]
},
  'wordsTable': {
  'wordsArray': 
              [
                  {
                      'text': 'La chic...',
                      'translatedText': 'The ...',
                      'audioSrc': './audio/lesson1.1/2.mp3'
                  },
                  {
                      'text': 'La casa....',
                      'translatedText': 'The ...',
                      'audioSrc': './audio/lesson1.1/1.mp3'
                  }
              ]
  },
  'blankSentences': {
    'showTranslation': true,
    'exerciseSentences': 
    [
        {
            'text': "El gato de mi madre es muy bonito.",
            'hiddenWord': "es",
            'labelText': "verbo ser",
            'helperText': "My mother's cat is very beautiful."
        },
        {
            'text': "El padre come muchas galletas.",
            'hiddenWord': "come",
            'labelText': "verbo comer",
            'helperText': "The father eats many cookies."
        },
        {
            'text': "El profesor canta muy bien.",
            'hiddenWord': "canta",
            'labelText': "verbo cantar",
            'helperText': "The teacher sings very well."
        },
        {
            'text': "El perro corre muy rapido.",
            'hiddenWord': "corre",
            'labelText': "verbo correr",
            'helperText': "The dog runs very fast."
        }
    ]

  },
  'videoActivity': {
    'onlyAddVideo': true,
    'margin': true,
    'youtubeIframe': `<iframe url from youtube...`    
  },
  'multipleChoicePlusAnswers': {
    'questions': 
                    [
                        {
                            'type': 'multiple',
                            'question': 'What is ...?',
                            'answersArray': [
                                'Correct answer',
                                'Is wrong',
                                'Also wrong',
                                'Mistaken too',
                            ]
                        },
                        {
                            'type': 'openQuestion',
                            'question': 'What is  a good question?',
                            'answer': 'This one'
                        }
                    ]
  }
}



//Materializa init
document.addEventListener('DOMContentLoaded', function() {
    var elemsSelect = document.querySelectorAll('select');
    M.FormSelect.init(elemsSelect, {});

      var collapsibleElems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(collapsibleElems, {});

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {
        inDuration: 100,
        opacity: .551, 
        dismissible: false,
        preventScrolling: true
    });   
    }
    )
    
// Sign up form
const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    auth.createUserWithEmailAndPassword(email,password).then((user)=>{
        // console.log("You are in!",user)

    }).catch((error)=>{
        // console.log(error.code, error.message);
        if(error.code=="auth/email-already-in-use"){
            auth.signInWithEmailAndPassword(email,password).then((user)=>{
                // console.log("You already have and account and are in!",user)
            }).catch((error)=>{
                console.log(error.message);
            })
        }
    })
});


//Authentication state listener
document.addEventListener('DOMContentLoaded', (e)=>{
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        // User is signed in.
        
        db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
          //Add brand new lesson to db
          let addNewLessonForm = document.getElementById('addNewLessonForm');
          let addNewLessonFormBtn = document.createElement('button')
          addNewLessonFormBtn.classList.add("btn")
          addNewLessonFormBtn.setAttribute("type","submit");
          addNewLessonFormBtn.innerHTML="ADD"
          addNewLessonForm.appendChild(addNewLessonFormBtn)
          addNewLessonForm.addEventListener('submit',function(e){
            e.preventDefault();
            db.collection("lessons").doc().set({
              'level': parseInt(addNewLessonForm['level'].value),
              'lessonNumber': parseInt(addNewLessonForm['lessonNumber'].value),
              'lessonTitle': addNewLessonForm['lessonTitle'].value,
              'public': false,
              'activitiesArray': [ {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "M",
                'lessonTopImageSrc': ''
            },

              ]
           } ).then(function(){
             console.log("Added correctly")
           }).catch(function(error){
             console.error("ERROR adding new lesson", error)
           })

          })


            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("none");
            });

            let levelLessonForm = document.getElementById("level-lesson-form");
            let levelValueInput = document.getElementById("level-lesson-formLevel");
            let lessonValueInput = document.getElementById("level-lesson-formLesson");
            levelLessonForm.addEventListener('submit',function(e){
              e.preventDefault();
              
              let thisLevel = parseInt(levelValueInput.value)
              let thisLesson = parseInt(lessonValueInput.value)
            //Save lesson main current settings
              let lessonNumber;
              let lessonTitle;
              let level;
              let thisLessonActivities;
              let thisLessonDocId;
              //Get activities data from data base for this lesson
            db.collection("lessons")
            .where("level", "==", (thisLevel)) 
            .where("lessonNumber", "==", (thisLesson))
            .get().then(function(doc){
              
                  doc.forEach(function(thisDoc) {
                  lessonNumber = thisDoc.data()['lessonNumber'];
                  lessonTitle  = thisDoc.data()['lessonTitle'];
                  level = thisDoc.data()['level'];;
                  thisLessonDocId = thisDoc.id
                  thisLessonActivities = thisDoc.data()['activitiesArray']
                  })
                  // console.log(lessonNumber,lessonTitle,level,thisLessonDocId,thisLessonActivities)
                  // lessonSettingsDiv
                  let leftPanelActivities = document.getElementById('leftPanelActivities');
                  leftPanelActivities.innerHTML= '';

                  let lessonSettingsDiv = document.createElement('div');
                  let lessonSettingsForm = document.createElement('form');
                  lessonSettingsForm.classList.add('center');
                  lessonSettingsForm.classList.add("row")
                  lessonSettingsForm.setAttribute('id',`mainSettingForm${thisLessonDocId}`)
                            
                            let lessonNumberDiv = document.createElement('div')
                            lessonNumberDiv.classList.add("col")
                            lessonNumberDiv.classList.add("s6")
                            lessonNumberDiv.classList.add('input-field');
                            lessonNumberDiv.innerHTML = `<input placeholder="${lessonNumber}" id="${thisLessonDocId}lessonNumber" name="lessonNumber" type="text" class="validate" value="${lessonNumber}">`
                            lessonSettingsForm.appendChild(lessonNumberDiv)
                            
                            let lessonTitleDiv = document.createElement('div')
                            lessonTitleDiv.classList.add("col")
                            lessonTitleDiv.classList.add("s6")
                            lessonTitleDiv.classList.add('input-field');
                            lessonTitleDiv.innerHTML = `<input placeholder="${lessonTitle}" id="${thisLessonDocId}lessonTitle" name="lessonTitle" type="text" class="validate" value="${lessonTitle}">`
                            lessonSettingsForm.appendChild(lessonTitleDiv)
                            
                          let updateBtn = document.createElement('button');
                          updateBtn.classList.add('btn');
                          
                          updateBtn.setAttribute('type',`submit`);
                          updateBtn.innerHTML = 'Update lesson settings';

                        lessonSettingsForm.appendChild(updateBtn)
                        lessonSettingsDiv.appendChild(lessonSettingsForm)
                        leftPanelActivities.appendChild(lessonSettingsDiv)

                        ////
                        lessonSettingsForm.addEventListener('submit', function(e){
                          e.preventDefault();
                          let lessonUpdatesObj = {}
                          for(let i =0;i<lessonSettingsForm.elements.length; i++){
                            let key = lessonSettingsForm.elements[i].name;
                            let value = lessonSettingsForm.elements[i].value;
                            if((value)&&(key)){
                              console.log("Value is ", key,typeof value, value);
                              if(key=='lessonNumber'){
                                value = parseInt(value)
                              }
                              lessonUpdatesObj[key] =  value
                            }
                          }
                          
                          console.log("Obj is ",lessonUpdatesObj, thisLessonDocId)
                          db.collection('lessons').doc(thisLessonDocId).set(lessonUpdatesObj,{merge:true}).then(function(){
                        console.log("Updated")
                        }).catch(function(err){
                          console.log(err.message)
                        })
                        });
                        displayActivitiesFromLessonOnLeftPanel(thisLessonActivities,thisLessonDocId);

                        var collapsibleElems = document.querySelectorAll('.collapsible');
                        M.Collapsible.init(collapsibleElems, {});

            })
            })
          })
          
    }
    else
    {
            console.log("You're NOT logged in");
            document.querySelector('#navBarbuttons').innerHTML = ``;
            document.querySelector('#slide-out').innerHTML = ``;

            
            document.querySelectorAll(".loggedOut").forEach((e)=>{
                e.style.display = ("block");
            });
            document.querySelectorAll(".loggedIn").forEach((e)=>{
                e.style.display = ("none");
            })
        // No user is signed in.
        lessonContainer.innerHTML =``
        }
    });   
});

function displayActivitiesFromLessonOnLeftPanel(activitiesArray, lessonDocId){
  let leftPanelActivities = document.getElementById('leftPanelActivities');
  let lessonRandomId = Math.floor(Math.random()*100000);

  let activityDiv = document.createElement('ul');
  activityDiv.classList.add('collapsible')
//Read current activities and display them
  activitiesArray.forEach(function(activity,i,a){
  
  // leftPanelActivities.innerHTML= ''
    let activityRandomId = Math.floor(Math.random()*100000);
    let activityLi = document.createElement('li')
    // //Header
    let headerDiv = document.createElement('div');
    headerDiv.classList.add("collapsible-header");
    headerDiv.innerHTML = `<i class="material-icons">filter_drama</i>${activity.activityOrder} ${activity.activityModuleType}`
    // //Body
    let bodyDiv = document.createElement('div');
    bodyDiv.classList.add("collapsible-body");
    
    let activityForm = document.createElement('form');
    activityForm.setAttribute('id',`activityForm${lessonDocId}`)
    bodyDiv.appendChild(activityForm)

    let activityOrderDiv = document.createElement('div')
    activityOrderDiv.classList.add('input-field');
    activityOrderDiv.innerHTML = `<input placeholder="Title" id="inputActivityOrder${activityRandomId}" name="activityOrder" type="text" class="validate" value="${activity.activityOrder}">`
    activityForm.appendChild(activityOrderDiv)

          if(activity.activityModuleType=='renderLessonTitle'){
            let titleDiv = document.createElement('div')
            titleDiv.classList.add('input-field');
            titleDiv.innerHTML = `<input placeholder="Title" id="inputTitle${activityRandomId}" name="title" type="text" class="validate" value="${activity.title}">`
            activityForm.appendChild(titleDiv);

             /// lessonTopImageSrc
            let lessonTopImageSrcDiv = document.createElement('div')
            lessonTopImageSrcDiv.classList.add('input-field');
            lessonTopImageSrcDiv.innerHTML = `<input placeholder="Top image url" name="lessonTopImageSrc" id="topimagesource${activityRandomId}" type="text" class="validate" value="${activity.lessonTopImageSrc}">`
            activityForm.appendChild(lessonTopImageSrcDiv)
          }
          //Display common properties Settings
          if((activity.activityModuleType=='wordsTable')
          ||(activity.activityModuleType=='blankSentences')
          ||(activity.activityModuleType=='missingWordsParagraph')
          ||(activity.activityModuleType=='multipleChoicePlusAnswers')
          ||(activity.activityModuleType=='exampleCards')
          ||(activity.activityModuleType=='videoActivity')){
            deployInputField('moduleHeaderText',activity.moduleHeaderText)
            deployInputField('moduleHeaderIcon',activity.moduleHeaderIcon)
            deployInputField('moduleBasicText',activity.moduleBasicText)
            deployBooleanField('section',activity.section)
          }
          if(activity.activityModuleType=='missingWordsParagraph'){
            deployBasic('activityHeaderText',activity['activityHeaderText'],`activityHeaderText`)
            deployBasic('sideImgLocation',activity['sideImgLocation'],`sideImgLocation`)
            deployBooleanField('helptags',activity['helptags'])
            deployBooleanField('autoShowHelptags',activity['autoShowHelptags'])
            deploytextArea('paragraphText',activity['paragraphText'])

          }

          if(activity.activityModuleType=='wordsTable'){
            activity.wordsArray.forEach((wordObj,i)=>{
              let dividerDiv = document.createElement("div")
              dividerDiv.classList.add("red")
              dividerDiv.classList.add("lighten-2")
              dividerDiv.innerHTML = `Entrada numero: ${1+i}`
              activityForm.appendChild(dividerDiv) 
              
              deployWordsArray('text', wordObj['text'], i)
              deployWordsArray('translatedText', wordObj['translatedText'], i)
              deployWordsArray('audioSrc', wordObj['audioSrc'], i);
            })
            
          }
          if(activity.activityModuleType=='blankSentences'){
              activity.exerciseSentences.forEach((sentenceObj,i)=>{
                
                let dividerDiv = document.createElement("div")
                dividerDiv.classList.add("yellow")
                dividerDiv.innerHTML = `Entrada numero: ${1+i}`
                activityForm.appendChild(dividerDiv) 
                
                deployWordsArray('text', sentenceObj['text'], i)
                deployWordsArray('hiddenWord', sentenceObj['hiddenWord'], i)
                deployWordsArray('labelText', sentenceObj['labelText'], i);
                deployWordsArray('helperText', sentenceObj['helperText'], i);
              })
              
            }
          if(activity.activityModuleType=='videoActivity'){
            deployBooleanField('onlyAddVideo',activity.onlyAddVideo)
            deployBooleanField('margin',activity.margin)
            deployInputField('youtubeIframe',activity.youtubeIframe);
          }
          if(activity.activityModuleType=='multipleChoicePlusAnswers'){
            activity.questions.forEach((question,i)=>{
              let dividerDiv = document.createElement("div")
              dividerDiv.classList.add("purple")
              dividerDiv.classList.add("lighten-2")
              dividerDiv.innerHTML = `Pregunta numero: ${1+i}`;
              activityForm.appendChild(dividerDiv) 

              deployBasic('type',question['type'],'type')
              deploymultipleChoicePlusAnswersQuestion('question',question['question'],i)
              if(question['answer']){
                deploymultipleChoicePlusAnswersArray('answer',question['answer'],i)
              }else{
                deployAnswersArray('answersArray',question['answersArray'], i)
              }
              
            })
          }
          if(activity.activityModuleType=='exampleCards'){
            if(activity.examplesArray){
              activity.examplesArray.forEach((exampleObj,i)=>{
                let dividerDiv = document.createElement("div")
                dividerDiv.classList.add("red")
                dividerDiv.classList.add("lighten-4")
                dividerDiv.innerHTML = `Entrada numero: ${1+i}`
                dividerDiv.classList.add(`exampleCardsCounter${i}`)
                dividerDiv.classList.add(`exampleCardsCounter`)
                activityForm.appendChild(dividerDiv) 
                deployBasic('imgSrc',exampleObj['imgSrc'],`exampleCards[${i}][imgSrc]`)
                deployBasic('text',exampleObj['text'],`exampleCards[text]`)
                deployBasic('translatedText',exampleObj['translatedText'],`exampleCards[${i}][translatedText]`)
                deployBasic('audioSrc',exampleObj['audioSrc'],`exampleCards[${i}][audioSrc]`)
                let removeExampleBtn = document.createElement('button');
                removeExampleBtn.classList.add("btn-small")
                removeExampleBtn.classList.add("purple")
                removeExampleBtn.classList.add("lighten-4")
                removeExampleBtn.innerHTML = 'Delete this';
                removeExampleBtn.addEventListener('click',function(e){
                  e.preventDefault();
                  activityForm.removeChild(dividerDiv)
                  activityForm.removeChild((activityForm[`exampleCards[${i}][imgSrc]`]).parentElement)
                  activityForm.removeChild((activityForm[`exampleCards[${i}][translatedText]`]).parentElement.previousSibling)
                  activityForm.removeChild((activityForm[`exampleCards[${i}][translatedText]`]).parentElement)
                  activityForm.removeChild((activityForm[`exampleCards[${i}][audioSrc]`]).parentElement)
                  activityForm.removeChild(removeExampleBtn)
                })
                activityForm.appendChild(removeExampleBtn)
              })
              let addExampleBtn = document.createElement('button');
              addExampleBtn.classList.add("btn")
              addExampleBtn.classList.add("grey")
              addExampleBtn.innerHTML = 'Add new example';
              activityForm.appendChild(addExampleBtn)
              addExampleBtn.addEventListener('click',function(e){
                e.preventDefault();
                ///Find all the dividers and find the first empty slot
     
                let slot = activityForm.querySelectorAll('.exampleCardsCounter').length;
                for(let j=0;j<activityForm.querySelectorAll('.exampleCardsCounter').length;j++){
                  if(!(activityForm.querySelectorAll('.exampleCardsCounter')[j]).classList.contains(`exampleCardsCounter${j}`)){
                    slot==j;
                    slot++
                    break
                  }
                }

                let dividerDiv = document.createElement("div")
                dividerDiv.classList.add("red")
                dividerDiv.classList.add("lighten-4")
                dividerDiv.innerHTML = `Entrada numero: ${1+slot}`
                dividerDiv.classList.add(`exampleCardsCounter${slot}`)
                dividerDiv.classList.add(`exampleCardsCounter`)
                activityForm.appendChild(dividerDiv) 
                deployBasic('imgSrc','Image src...',`exampleCards[${slot}][imgSrc]`)
                deployBasic('text','Text...',`exampleCards[text]`)
                deployBasic('translatedText','Translation',`exampleCards[${slot}][translatedText]`)
                deployBasic('audioSrc','mp3 source',`exampleCards[${slot}][audioSrc]`)
                let removeExampleBtn = document.createElement('button');
                removeExampleBtn.classList.add("btn-small")
                removeExampleBtn.classList.add("purple")
                removeExampleBtn.classList.add("lighten-4")
                removeExampleBtn.innerHTML = 'Delete this';
                removeExampleBtn.addEventListener('click',function(e){
                  e.preventDefault();
                  activityForm.removeChild(dividerDiv)
                  activityForm.removeChild((activityForm[`exampleCards[${slot}][imgSrc]`]).parentElement)
                  activityForm.removeChild((activityForm[`exampleCards[${slot}][translatedText]`]).parentElement.previousSibling)
                  activityForm.removeChild((activityForm[`exampleCards[${slot}][translatedText]`]).parentElement)
                  activityForm.removeChild((activityForm[`exampleCards[${slot}][audioSrc]`]).parentElement)
                  activityForm.removeChild(removeExampleBtn)
                })
                activityForm.appendChild(removeExampleBtn)
              })
            }
           
          }

          function deploytextArea(objkey,objValue){
            let lessonRandomId = Math.floor(Math.random()*100000);
            let div = document.createElement('div')
            div.classList.add("grey")
            div.classList.add("lighten-3")
            div.classList.add('input-field');
            let textareaDiv = document.createElement('textarea')
            textareaDiv.classList.add("materialize-textarea")
            textareaDiv.innerHTML = objValue
            textareaDiv.id = `textArea${lessonRandomId}`
            textareaDiv.name = objkey
            // textareaDiv.setAttribute("rows", 155)
            // textareaDiv.setAttribute("cols", 55)
            let label = document.createElement('label')
            label.setAttribute("for", `textArea${lessonRandomId}`)
            label.innerHTML = objkey;
            div.appendChild(textareaDiv)
            div.appendChild(label)
            activityForm.appendChild(div)
            
            M.textareaAutoResize(textareaDiv)
          }
          function deployBasic(inputName,value,name){
            let lessonRandomId = Math.floor(Math.random()*100000);
            let div = document.createElement('div')
            div.classList.add("grey")
            div.classList.add("lighten-3")
            div.classList.add('input-field');
            div.innerHTML = `<input placeholder="${inputName}" name="${name}" id="${inputName}${name}${lessonRandomId}" type="text" class="validate" value="${value}">`
            activityForm.appendChild(div)
            
          }
          
          let updateActivityBtn = document.createElement('button');
          updateActivityBtn.setAttribute('type',`submit`);
          updateActivityBtn.innerHTML = 'Update activities';
          updateActivityBtn.classList.add('btn');
          activityForm.appendChild(updateActivityBtn)
          activityLi.appendChild(headerDiv)
          activityLi.appendChild(bodyDiv);          
          activityDiv.appendChild(activityLi)
          
          function deploymultipleChoicePlusAnswersQuestion(inputName,value, index){
            let lessonRandomId = Math.floor(Math.random()*100000);
            let div = document.createElement('div')
            div.classList.add("grey")
            div.classList.add("lighten-3")
            div.classList.add('input-field');
            div.innerHTML = `<input placeholder="${inputName}" name="question" id="${inputName}${lessonRandomId}" type="text" class="validate" value="${value}">`
            activityForm.appendChild(div)
          }

          function deploymultipleChoicePlusAnswersArray(inputName,value, index){
            let lessonRandomId = Math.floor(Math.random()*100000);
            let div = document.createElement('div')
            div.classList.add("grey")
            div.classList.add("lighten-3")
            div.classList.add('input-field');
            div.innerHTML = `<input placeholder="${inputName}" name="openQuestionAnswer" id="${inputName}${lessonRandomId}" type="text" class="validate" value="${value}">`
            activityForm.appendChild(div)
          }
          function deployAnswersArray (thisName,thisAnswersArray,i){
            let answersDiv = document.createElement('div');
            answersDiv.classList.add("blue")
            answersDiv.classList.add("lighten-3")
            thisAnswersArray.forEach(function(answer,j){
              let thisInput = document.createElement('input');
              thisInput.setAttribute("placeholder",`${answer}`)
              // thisInput.setAttribute("name",`deploymultipleChoicePlusAnswersArray[${inputName}]`)
              thisInput.setAttribute("type","text")
              // thisInput.setAttribute("","")
              thisInput.classList.add("validate")
              thisInput.id = `deploymultipleChoicePlusAnswersArray${thisName}[${i}][${j}]`
              thisInput.value = `${answer}`;
              thisInput.name = `${thisName}[${i}]`
              
              answersDiv.appendChild(thisInput)
            })
            activityForm.appendChild(answersDiv)
          }


          function deployWordsArray(inputName,value, index){
            let lessonRandomId = Math.floor(Math.random()*100000);
            let div = document.createElement('div')
            div.classList.add('input-field');
            div.innerHTML = `<input placeholder="${inputName}" name="wordsArray[${inputName}]" id="${inputName}${lessonRandomId}" type="text" class="validate" value="${value}">`
            activityForm.appendChild(div)
          }

          /////////////DEPLOYING functions
          function deployInputField(inputName,value){
            let lessonRandomId = Math.floor(Math.random()*100000);
            let div = document.createElement('div')
            let nameDiv = document.createElement('div')
            nameDiv.innerHTML = inputName;
            div.classList.add('input-field');
            div.innerHTML = `<input placeholder="${inputName}" name="${inputName}" id="${inputName}${lessonRandomId}" type="text" class="validate" value="${value}">`
            activityForm.appendChild(nameDiv)
            activityForm.appendChild(div)
          }
          ///COMMENTING FUNCTION TO MOVE ITS SCOPE
          function deployBooleanField(inputName,value){
            let div = document.createElement('div')
            let nameDiv = document.createElement('div')
            nameDiv.innerHTML = inputName;
            div.classList.add('input-field');
            div.classList.add('col');
            div.classList.add('s12');
            div.classList.add('red-text');
            // div.innerHTML = `<input placeholder="${inputName}" name="${inputName}" id="${inputName}${activityRandomId}" type="text" class="validate" value="${value}">`
            let selectDiv = document.createElement('select')
            selectDiv.setAttribute('name', inputName)
            selectDiv.classList.add("browser-default")
            let optionTrueDiv = document.createElement('option')
            optionTrueDiv.value = true;
            optionTrueDiv.innerHTML = 'True';
            
            let optionFalseDiv = document.createElement('option')
            optionFalseDiv.value = false
            optionFalseDiv.innerHTML = 'False';
            if((value==true)||((value=='true'))){
              optionTrueDiv.selected = true;
            }else{
              optionFalseDiv.selected = true;
            }
            // let labelDiv = document.createElement('label')
            // labelDiv.innerHTML = inputName
            // labelDiv.setAttribute('for',inputName)
            
              selectDiv.appendChild(optionTrueDiv)
              selectDiv.appendChild(optionFalseDiv)
              // div.appendChild(labelDiv)
              activityForm.appendChild(nameDiv)
            div.appendChild(selectDiv)
            
            activityForm.appendChild(div);
          }

activityForm.addEventListener('submit',function(e){
    e.preventDefault();
    //Basic settings for all activities. Only order
    let activityOrder = parseInt(activityForm['activityOrder'].value)
    let newActivityObj = {
      'activityModuleType': activity.activityModuleType,
      'activityOrder': activityOrder
    }
    //Setting for lessontitle
    if(activity.activityModuleType=='renderLessonTitle'){
      newActivityObj['title'] =  activityForm['title'].value;
      newActivityObj['lessonTopImageSrc'] = activityForm['lessonTopImageSrc'].value
    }
    //Basic common Activity settings
    if((activity.activityModuleType=='wordsTable')
    ||(activity.activityModuleType=='blankSentences')
    ||(activity.activityModuleType=='missingWordsParagraph')
    ||(activity.activityModuleType=='exampleCards')
    ||(activity.activityModuleType=='multipleChoicePlusAnswers')
    ||(activity.activityModuleType=='videoActivity')){
       newActivityObj['moduleHeaderText'] = activityForm['moduleHeaderText'].value
      newActivityObj['moduleHeaderIcon'] = activityForm['moduleHeaderIcon'].value
      newActivityObj['moduleBasicText'] = activityForm['moduleBasicText'].value
      newActivityObj['section'] = activityForm['section'].value;
    }
    
    if(activity.activityModuleType=='exampleCards'){
      let examplesNewArray = [];
          if(activityForm[`exampleCards[text]`].length){ //Several examples
            for (i = 0; i < activityForm[`exampleCards[text]`].length; i++){
              let exampleObj = {}
              exampleObj['text'] = activityForm[`exampleCards[text]`][i].value
              exampleObj['imgSrc'] = activityForm[`exampleCards[${i}][imgSrc]`].value
              exampleObj['translatedText'] = activityForm[`exampleCards[${i}][translatedText]`].value
              exampleObj['audioSrc'] = activityForm[`exampleCards[${i}][audioSrc]`].value
              examplesNewArray.push(exampleObj)
            }

          } else {  //Only one example
            let exampleObj = {}            
            exampleObj['text'] = activityForm[`exampleCards[text]`].value
            exampleObj['imgSrc'] = activityForm[`exampleCards[0][imgSrc]`].value
            exampleObj['translatedText'] = activityForm[`exampleCards[0][translatedText]`].value
            exampleObj['audioSrc'] = activityForm[`exampleCards[0][audioSrc]`].value
            examplesNewArray.push(exampleObj)
          }
      console.log(examplesNewArray, "POS")
      newActivityObj['examplesArray'] = examplesNewArray;
    }
    if(activity.activityModuleType=='missingWordsParagraph'){
      // console.log(activityForm['helptags'].value)
      newActivityObj['paragraphText'] = activityForm['paragraphText'].value;
      newActivityObj['helptags'] = activityForm['helptags'].value;
      newActivityObj['autoShowHelptags'] = activityForm['autoShowHelptags'].value;
      newActivityObj['sideImgLocation'] = activityForm['sideImgLocation'].value;
    }
    //Setting for each type of module
    if(activity.activityModuleType=='wordsTable'){
      let wordsNewArray = []
      for(let i=0;i<activityForm.elements["wordsArray[text]"].length;i++){
        let thisWordObj = {}
        thisWordObj['text'] = activityForm.elements["wordsArray[text]"][i].value;
        thisWordObj['translatedText'] = activityForm.elements["wordsArray[translatedText]"][i].value;
        thisWordObj['audioSrc'] = activityForm.elements["wordsArray[audioSrc]"][i].value;
        wordsNewArray.push(thisWordObj)
      }
      newActivityObj['wordsArray'] = wordsNewArray;
    }
    if(activity.activityModuleType=='blankSentences'){
      let sentencesArray = [];
      for(let i=0;i<activityForm.elements["wordsArray[text]"].length;i++){
        let thisSentenceObj = {}
        thisSentenceObj['text'] = activityForm.elements["wordsArray[text]"][i].value;
        thisSentenceObj['hiddenWord'] = activityForm.elements["wordsArray[hiddenWord]"][i].value;
        thisSentenceObj['labelText'] = activityForm.elements["wordsArray[labelText]"][i].value;
        thisSentenceObj['helperText'] = activityForm.elements["wordsArray[helperText]"][i].value;
        sentencesArray.push(thisSentenceObj)
      }
      newActivityObj['exerciseSentences'] = sentencesArray;
    }


    if(activity.activityModuleType=='videoActivity'){
      newActivityObj['onlyAddVideo'] =  activityForm['onlyAddVideo'].value;
      newActivityObj['margin'] =  activityForm['margin'].value;
      newActivityObj['youtubeIframe'] =  activityForm['youtubeIframe'].value;
    }
    if(activity.activityModuleType=='multipleChoicePlusAnswers'){
      //Create the initial empty array to push the different questions inside.
      let questionsArray = []
      //Calculate how many questions there are in the form to know how many questions should be created.
      
      let openQuestionCounter = 0
      // let multipleCounter = 0
      for(let i=0;i<activityForm.elements['question'].length;i++){
        
        let questionObjInArray = {}
        questionObjInArray['type'] = activityForm.elements['type'][i].value
        questionObjInArray['question'] = activityForm.elements['question'][i].value;
        
        if(activityForm.elements['type'][i].value=='openQuestion'){
          questionObjInArray['answer'] = activityForm.elements['openQuestionAnswer'][openQuestionCounter].value;
          openQuestionCounter++
        }else if (activityForm.elements['type'][i].value=='multiple'){ 
          let thisQuestionAnswersArray = [];
          let group = `answersArray[${i}]`
          let options = activityForm.elements[`${group}`]
          // console.log(option)
          for(let z=0;z<options.length;z++){
            let opt = options[z].value
            thisQuestionAnswersArray.push(opt)
          }
          
          questionObjInArray['answersArray'] = thisQuestionAnswersArray
        }
        questionsArray.push(questionObjInArray)
      }
      newActivityObj['questions'] = questionsArray;
    }
    
  generateNewActivitiesArray(activitiesArray,newActivityObj,i)

  function generateNewActivitiesArray(currentActivitiesArray,newActivity,arrayPosition){
    console.log(currentActivitiesArray,newActivity, arrayPosition )
    currentActivitiesArray.splice(arrayPosition,1,newActivity) 
    let lessonActivitiesObj = {
      'activitiesArray': currentActivitiesArray
    }
    console.log(currentActivitiesArray,newActivity, arrayPosition )
    // console.log("New activities Obj: ",lessonActivitiesObj)
    // console.log("New activity input: ",newActivity)
    // db.collection('lessons').doc(lessonDocId)
    // .set(lessonActivitiesObj,{merge:true})
    // .then(function(){
    //   console.log("Updated")
    //   }).catch(function(err){
    //     console.log(err.message)
    //   })
  }


  
  })
  })
  
  leftPanelActivities.appendChild(activityDiv)


  ///Show add new activities to current selected level
  let addNewActivityUl =  document.createElement('ul');

  addNewActivityUl.classList.add('collapsible')
  let addNewActivity = document.createElement('li')
  // //Header
  let addNewActivityHeader = document.createElement('div');
  addNewActivityHeader.classList.add("collapsible-header");
  addNewActivityHeader.innerHTML = `Add new activity`

  // //Body
  let addNewActivityBody = document.createElement('div');
  addNewActivityBody.classList.add("collapsible-body");
  let typeSelectForm =  document.createElement('form');
  let typeSelectFormSelect  = document.createElement('select');
  typeSelectForm.appendChild(typeSelectFormSelect)
  let optionDefault = document.createElement('option')
  optionDefault.disabled;
  optionDefault.innerHTML = "Type of new activity"
  optionDefault.setAttribute("selected","")
  
  Object.keys(activityTypesTemplates).forEach((e)=>{
    let option = document.createElement('option')
    option.value = e
    option.innerHTML = e
    typeSelectFormSelect.appendChild(option)
  })
  addNewActivityBody.appendChild(typeSelectForm)
    typeSelectFormSelect.appendChild(optionDefault)

    //On select new type of activity, load the common and specific input fields for that type of acitvty
  typeSelectForm.addEventListener('change', function(e){
    e.preventDefault();
    let allOptions = typeSelectForm.getElementsByTagName('option')
    for(let i=0;i<allOptions.length;i++){
      if(allOptions[i].selected === true){
        let selectedType = allOptions[i].value
        deployNewActivityForm(selectedType)
      }
    }
  })
////////////////////////////////// deploy the needed input fields for this activity type / ///////////////////////////////
  function deployNewActivityForm(activityType){
    let activityForm = document.createElement('form');
    activityForm.classList.add("teal")
    activityForm.classList.add("black-text")
    activityForm.classList.add("lighten-5")
    Object.keys(commonActivitiesSettings).forEach(function(setting){
      let input = document.createElement("input")
      input.setAttribute("type", "text")
      input.setAttribute("autocomplete", "off")
      input.setAttribute("placeholder", setting)
      input.name=setting
      activityForm.appendChild(input)
    })
    
    addNewActivityBody.appendChild(activityForm)
    
    Object.values(activityTypesTemplates[activityType]).forEach(function(value,i,arr){
        if(activityType=='exampleCards'){
          console.log(i, 
            Object.keys(activityTypesTemplates[activityType])[i]
            ,
            value
            )
        }
    })
    let submitBtn = document.createElement("button")
    submitBtn.classList.add("btn")
    submitBtn.classList.add("center")
    submitBtn.setAttribute("type","submit");
    submitBtn.innerHTML = "Add new activity"
    activityForm.append(submitBtn)

    //Send form to Db
    activityForm.addEventListener('submit',function(e){
      let currentArray = []
      e.preventDefault()
      let level = document.getElementById('level-lesson-formLevel').value
        level = parseInt(level)
      let lesson = document.getElementById('level-lesson-formLesson').value
        lesson = parseInt(lesson)

      db.collection("lessons")
      .where("level", "==", (level)) 
      .where("lessonNumber", "==", (lesson))
      .get().then(function(doc){
        let lessonDocId;
            doc.forEach(function(thisDoc) {
              thisDoc.data()['activitiesArray'].forEach(function(e){
                currentArray.push(e)
              })
              lessonDocId = thisDoc.id
          })

  // console.log(newActivityObj,level,lesson,lessonDocId)
  let newActivityObj = {}

  newActivityObj['activityModuleType'] = activityType;
  console.log("BEFOER",newActivityObj)
  Object.values(activityTypesTemplates[activityType]).forEach(function(value,i,arr){
    newActivityObj[Object.keys(activityTypesTemplates[activityType])[i]] = value
    // console.log(Object.keys(activityTypesTemplates[activityType])[i])
    // console.log(value)

    })
    console.log(newActivityObj)
  let inputs = activityForm.getElementsByTagName('input');
  for(let i=0;i<inputs.length;i++){
    if(inputs[i].getAttribute('type')=='text'){
      newActivityObj[inputs[i]['placeholder']] = inputs[i].value
    }
    if(inputs[i].getAttribute('type')=='checkbox'){
      newActivityObj[inputs[i]['name']] = inputs[i].checked
    }
  }
    if(activityForm['activityOrder'].value==""){
      newActivityObj['activityOrder'] = currentArray.length
    }else{
      newActivityObj['activityOrder'] = activityForm['activityOrder'].value;
    }

  addNewActivityDb(currentArray,newActivityObj)
  function addNewActivityDb(currentActivitiesArray,newActivity){
    currentActivitiesArray.push(newActivity)
    let lessonActivitiesObj = {
    'activitiesArray': currentActivitiesArray
    }
    // console.log("New activities Obj: ",lessonActivitiesObj)
    // console.log("New activity input: ",newActivity)
    db.collection('lessons').doc(lessonDocId)
    .set(lessonActivitiesObj,{merge:true})
    .then(function(){
    console.log("Updated")
    })
    .catch(function(err){
    console.log(err.message)
    })
  }

          
        })


    })
  }


  var collapsibleElems = document.querySelector('.collapsible');
  M.Collapsible.init(collapsibleElems, {});

  addNewActivity.appendChild(addNewActivityHeader)
  addNewActivity.appendChild(addNewActivityBody)
  addNewActivityUl.appendChild(addNewActivity)
  leftPanelActivities.appendChild(addNewActivityUl)
  
  M.FormSelect.init(typeSelectFormSelect, {});
}

// function deployBooleanField(inputName,value){
//   let div = document.createElement('div')
//   let nameDiv = document.createElement('div')
//   nameDiv.innerHTML = inputName;
//   div.classList.add('input-field');
//   div.classList.add('col');
//   div.classList.add('s12');
//   div.classList.add('red-text');
//   // div.innerHTML = `<input placeholder="${inputName}" name="${inputName}" id="${inputName}${activityRandomId}" type="text" class="validate" value="${value}">`
//   let selectDiv = document.createElement('select')
//   selectDiv.setAttribute('name', inputName)
//   selectDiv.classList.add("browser-default")
//   let optionTrueDiv = document.createElement('option')
//   optionTrueDiv.value = true;
//   optionTrueDiv.innerHTML = 'True';
  
//   let optionFalseDiv = document.createElement('option')
//   optionFalseDiv.value = false
//   optionFalseDiv.innerHTML = 'False';
//   if((value==true)||((value=='true'))){
//     optionTrueDiv.selected = true;
//   }else{
//     optionFalseDiv.selected = true;
//   }
//   // let labelDiv = document.createElement('label')
//   // labelDiv.innerHTML = inputName
//   // labelDiv.setAttribute('for',inputName)
  
//     selectDiv.appendChild(optionTrueDiv)
//     selectDiv.appendChild(optionFalseDiv)
//     // div.appendChild(labelDiv)
//     activityForm.appendChild(nameDiv)
//   div.appendChild(selectDiv)
  
//   activityForm.appendChild(div);
// }




export {auth

};
