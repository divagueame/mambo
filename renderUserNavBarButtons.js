import {activeLessonId, db} from './java.js';
export default function renderUserNavBarButtons() {
    // console('renderUserNavBarButtons initiated')
    db.collection('users').doc(firebase.auth().currentUser.uid)
        .collection('userSettings').doc('settingsObj').get()
        .then((doc)=>{
            let userAvatarId = doc.data().avatarNumberId;



            const navBarbuttons = document.querySelector("#navBarbuttons");
            let html = `
            <li class="purple"><a class="">
            <img class="fixed-widthImg" src="./img/avatars/${userAvatarId}.png">
            </a>
            
            </li>
            
            <li  class="row green"><a href="#"><i class="material-icons tiny white-text">assignment_ind</i></a></li>  
            <li><a href="#"  class="btn-floating blue-text"><i class="material-icons tiny white-text">person_pin</i></a></li>  
        
            <li><a href="#"><i class="material-icons tiny">input</i></a></li>
            `;
        
            navBarbuttons.innerHTML = html


        })

}