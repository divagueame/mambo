import {activeLessonId, db} from './java.js';



export default function renderUserNavBarButtons() {


    
    console.log('renderUserNavBarButtons initiated')
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
            `;
            // <li  class="row">
            //     <a href="#">
            //         <i class="material-icons tiny white-text">assignment_ind</i>
            //     </a>
            // </li>  
            // <li>
            //     <a href="#" class="btn-floating blue-text">
            //         <i class="material-icons tiny white-text">person_pin</i>
            //     </a>
            // </li>  
        
            // <li>
            //     <a href="#">
            //         <i class="material-icons tiny">input</i>
            //     </a>
            // </li>

        
            navBarbuttons.innerHTML = html

            const elem = document.getElementById('modalUserProgressInfo');
            const instance = M.Modal.init(elem, {
              startingTop: '21%',
              inDuration: 20

            });
            
        })

}

