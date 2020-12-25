import moduleHeader from './moduleHeader.js'

export default function videoActivity(obj, targetDom) {
    console.log("Video activity initiating...");
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    // Create the new element
  var moduleDiv = document.createElement('div');
  moduleDiv.classList.add("moduleDiv");
  moduleDiv.classList.add("section");
  
  let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])
  
  let moduleContainer = document.createElement('div')
  moduleContainer.innerHTML = `
  <div class="row">
  <div class="col s12 removePadding">
    <div class="video-container">
      ${obj.youtubeIframe}
    </div>
  </div>
  <div class="col s4 red">
    <p>Video activity</p>
  </div>
</div>

  `; 
  
  moduleDiv.appendChild(moduleHeaderDiv);
  moduleDiv.appendChild(moduleContainer);
  targetDomDefault.appendChild(moduleDiv);






// // let youtubeIframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/joNX1WcXUck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

//     let html = `

//     `


}