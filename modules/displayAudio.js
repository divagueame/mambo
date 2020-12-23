
export default function displayAudio(src,DOMtarget){
  let randomId = Math.floor(Math.random()*100000);
  // console.log("YES", src,DOMtarget)
  let container = document.createElement('span');
  container.classList.add("valign-wrapper")
  container.innerHTML = 
`<i class="material-icons clickable" id="audioPlayIcon${randomId}">play_circle_filled</i>
<audio id="audioId${randomId}"  preload="auto" autobuffer class="audio">
  <source id="src-target${randomId}" src="${src}" type="audio/mpeg"> Your browser does not support the audio element.
</audio>`;

DOMtarget.appendChild(container)

const buttonSelect = document.getElementById(`audioPlayIcon${randomId}`);
let audioSelect =  document.getElementById(`src-target${randomId}`);

buttonSelect.addEventListener('click', function(){
  audioSelect.parentElement.play();
});

audioSelect.parentElement.addEventListener('playing', function(){
  buttonSelect.innerHTML = 'pause'
})

audioSelect.parentElement.addEventListener('pause', function(){
  buttonSelect.innerHTML = 'play_circle_filled'
})
return container
}
