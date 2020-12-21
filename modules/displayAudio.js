
export default function displayAudio(src,DOMtarget){
  let container = document.createElement('span');
  container.classList.add("valign-wrapper")
  container.innerHTML = 
`<i class="material-icons clickable" id="audioPlayIcon${src}">play_circle_filled</i>
<audio id="audioId${src}"  preload="auto" autobuffer class="audio">
  <source id="src-target${src}" src="${src}" type="audio/mpeg"> Your browser does not support the audio element.
</audio>`;

DOMtarget.appendChild(container)

const buttonSelect = document.getElementById(`audioPlayIcon${src}`);
let audioSelect =  document.getElementById(`src-target${src}`);

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
