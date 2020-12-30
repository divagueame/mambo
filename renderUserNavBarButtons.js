import {activeLessonId, db, auth} from './java.js';
import renderInitialPage from './renderInitialPage.js'

export default function renderUserNavBarButtons() {
    // console.log('renderUserNavBarButtons initiated')
    db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
            let userAvatarId = doc.data().avatarNumberId;

            const navBarbuttons = document.querySelector("#navBarbuttons");
            let html = `
            <li>
                <a href="#" id="userAvatarNavBarBtn">
                    <i class="material-icons tiny white-text">
                        <img class="fixed-widthImg" src="./img/avatars/${userAvatarId}.png">
                    </i>
                </a>
            </li>

            <li>                
                <button id="signOutButton" class="btn-small waves-effect waves-light grey">
                Log out
                </button>
            </li>  
          `
          
            navBarbuttons.innerHTML = html


            const userAvatarNavBarBtn = document.getElementById("userAvatarNavBarBtn");
            userAvatarNavBarBtn.addEventListener('click',function(){
              renderInitialPage()
            })

// Log out
const signOutButton = document.querySelector("#signOutButton");
signOutButton.addEventListener('click', function(){
    auth.signOut();
    console.log("User has signed out");
    lessonContainer.innerHTML =``
});

            
        })

}

