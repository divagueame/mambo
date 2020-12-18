import {activeLessonId, db, auth} from './java.js';

export default function renderUserNavBarButtons() {
    // console.log('renderUserNavBarButtons initiated')
    db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
            let userAvatarId = doc.data().avatarNumberId;

            const navBarbuttons = document.querySelector("#navBarbuttons");
            let html = `

<div id="modalUserProgressInfo" class="modal bottom-sheet black-text">
  <div class="modal-content">
    <h4>User info</h4>
    <p>A bunch of text</p>
  </div>

</div>

            <li>
                <a href="#modalUserProgressInfo" class="modal-trigger">
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


            

// Log out
const signOutButton = document.querySelector("#signOutButton");
signOutButton.addEventListener('click', function(){
    auth.signOut();
    console.log("User has signed out");
    lessonContainer.innerHTML =``
});



            const elem = document.getElementById('modalUserProgressInfo');
            const instance = M.Modal.init(elem, {
              startingTop: '21%',
              inDuration: 20

            });
            
        })

}

