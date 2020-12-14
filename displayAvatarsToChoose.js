import {activeLessonId, db} from './java.js';

import renderUserNavBarButtons from './modules/renderUserNavBarButtons.js';
export default function displayAvatarsToChoose() {



    let chosenAvatar = 0;
    let userId = firebase.auth().currentUser.uid;
    let avatars = ''

    for(let i=0;i<12;i++){
        avatars += `
        <div class="col s2   clickable">
        <img class="responsive-img circle avatarContainer"  id="avatarOption${i+1}" src="./img/avatars/${i+1}.png">
        </div>`
    }

const avatarsModal = document.querySelector(".avatarsModal");

let html = `
<div id="avatarsModal" class="modal">
  <div class="modal-content">
    <h5>Bienvenido a Mambo Spanish</h5>
<div class="row">
${avatars}
</div>
`
html += `
<form class="row valign-wrapper" id="avatarNameInputForm">
  <div class="col s3 offset-s4">
    <div class="input-field">
      <input id="usernameInput" type="text" class="validate" required>
      <label for="usernameInput">Tu nombre</label>
    </div>
  </div>
  <div class="col">
  <button class="btn waves-effect waves-light red lighten-2" type="submit" name="action">
    <i class="material-icons">thumb_up</i>
  </button>
    </div>
</form>
    
</div>
    `
avatarsModal.innerHTML = html;

const avatarsId = document.querySelectorAll(".avatarContainer");
 
avatarsId.forEach((avatar)=>{
    avatar.addEventListener("click", function(){
        let previousAvatarId = chosenAvatar;
        let previousAvatarSelector = document.querySelector(`#avatarOption${chosenAvatar}`);

        chosenAvatar = (avatar.id).substring(12);
        if(chosenAvatar!=previousAvatarId){
            avatar.classList.add("avatarActive");
            if(previousAvatarSelector){
                avatar.classList.add("z-depth-2");
                previousAvatarSelector.classList.remove("z-depth-2");
                previousAvatarSelector.classList.remove("avatarActive");
            }
        }
        }
)
})


avatarNameInputForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(chosenAvatar==0){
        M.toast({html: 'Escoge tu avatar para continuar'});
        setTimeout(function(){
            M.Toast.dismissAll();
        },2000)
    } else {
        let chosenUsername = document.querySelector("#usernameInput").value

        // Save info in the user obj
        db.collection('users').doc(userId)
        .collection('userSettings').doc('settingsObj')
        .set({
            'avatarNumberId': chosenAvatar,
            username: chosenUsername
        },{
            merge:true
        })
        .then(function(){
            console.log("User settings updated");
            M.toast({html: `Perfecto ${chosenUsername}!`});
                    //Close modal
        let elem = document.querySelector("#avatarsModal")
        var instance = M.Modal.getInstance(elem);
        instance.close();
        renderUserNavBarButtons()

        })
        .catch(function(){
            console.log("Error updating user settings")
        })
    }
});

const elem = document.getElementById('avatarsModal');
const instance = M.Modal.init(elem, {dismissible: false});
instance.open();


}