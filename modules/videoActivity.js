export default function videoActivity(obj, targetDom) {
    console.log("Video activity initiating...");
    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    

let youtubeIframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/joNX1WcXUck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    let html = `
    <div class="row">
  <div class="col s8">
    <div class="video-container">
      ${youtubeIframe}
    </div>
  </div>
  <div class="col s4 red">
    <p>Video activity</p>
  </div>
</div>

    `


    targetDomDefault.innerHTML += html
}