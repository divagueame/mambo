
export default function renderInitialPage(){
    const lessonContainer = document.querySelector('.lessonContainer'); 
    
    lessonContainer.innerHTML = '';
    let html = `
        <h1 class="center">Mambo!</h1>
        
        <div class="row center">
            <div class="col s4 initButton scale-transition scale-out">

                <div class="btn-floating btn-large white">
                <i class="material-icons black-text">library_books</i>
                </div>
                <div>Lessons</div>
            </div>
            <div class="col s4 initButton scale-transition scale-out">
                <div class=" scale-transition  scale-out btn-floating btn-large white">POS</div>
                <div></div>
            </div>
            <div class="col s4 initButton scale-transition scale-out">
                
                <div class="btn-floating btn-large white"><i class="material-icons black-text">videogame_asset</i></div>    
                <div>Drills</div>
            </div>
        </div>
    `
    lessonContainer.innerHTML = html;
    showLastUpdates()

function showLastUpdates(){

    let updatesDb = [
        {
        'avatarUrl': 'img/icons/updates/001-girl.png',
        'title': 'Update section',
        'text': "I added this update section and improved the usability of the website.",
        'date': "12/16/2020"
        },
        {
            'avatarUrl': 'img/icons/updates/034-website.png',
            'title': 'Lessons database',
            'text': "Changed the database structure and made the side bar navigation for the lessons.",
            'date': "11/16/2020"
        }
    ]
    let liTags = '';
    updatesDb.forEach((e)=>{
        console.log();
        let thisAvatarUrl = e['avatarUrl'];
        let titleUpdate = e['title'];
        let textUpdate = e['text'];
        let dateUpdate = e['date']
        let thisLi = `
        <li class="collection-item avatar">
            <img src="${thisAvatarUrl}" alt="" class="circle">
        <span class="title">${titleUpdate}</span>
        <p>${textUpdate}</p>
        <span class="grey-text  text-lighten-2">${dateUpdate}</span>
        
      </li>
      `
        liTags += thisLi;
    })
    let html = `
    <div class="row">
        <div class="col s8 offset-s2 grey">
            <h4>Lastest updates</h4>
        </div>
        <div class="col s8 offset-s2">
            <ul class="collection">${liTags}</ul>
        </div>
    </div>

  `

  lessonContainer.innerHTML += html

}



    function toggleScaleTransition(selector){
        let selec = `.${selector}`
        let initButtons = document.querySelectorAll(selec);
        let initTime = 200;
        initButtons.forEach((e)=>{
            setTimeout(() => {
                e.classList.toggle("scale-in");
                e.classList.toggle("scale-out")
            }, initTime);
            initTime += 100;
        })
    }
    
  
        toggleScaleTransition('initButton')
  

  }