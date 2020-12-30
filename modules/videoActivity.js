import moduleHeader from './moduleHeader.js'

export default function videoActivity(obj, targetDom) {
    // console.log("Video activity initiating...");
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    // Create the new element
  var moduleDiv = document.createElement('div');
  moduleDiv.classList.add("moduleDiv");
  moduleDiv.classList.add("section");
  if(obj.section==false){
    moduleDiv.classList.remove("section");
  }

  
  moduleDiv.classList.add("videoActivityModule");
  
  let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])
  
  let moduleContainer = document.createElement('div')
  let extraVideoInfo = '';
  if (obj.onlyAddVideo==false){
    extraVideoInfo =   `<div class="col s12">
  <p>Video activity</p>
</div>`;
  }

  let marginAroundVideo = ``
  if(obj.margin==true){
    marginAroundVideo = 'moduleMargin'
  }


  moduleContainer.innerHTML = `
  <div class="row removeBottomMargin">
  <div class="col s12 removePadding  ${marginAroundVideo}">
    <div class="video-container">
      ${obj.youtubeIframe}
    </div>
  </div>
${extraVideoInfo}
</div>
  `; 
  
  moduleDiv.appendChild(moduleHeaderDiv);
  moduleDiv.appendChild(moduleContainer);
  targetDomDefault.appendChild(moduleDiv);


}