export default function displayAudio(src,DOMtarget){
  let randomId = Math.floor(Math.random()*100000);
  
  let container = document.createElement('span');
  // container.classList.add("valign-wrapper");
  // container.classList.add("left");
  ///Icon
  let icon = document.createElement('i');
  icon.classList.add("material-icons")
  icon.classList.add("clickable")
  icon.id = `audioPlayIcon${randomId}`;
  icon.innerHTML = `play_circle_filled`;
  ///Audio element
  let audio = document.createElement('audio');
  audio.id = `id="audioId${randomId}`
  audio.setAttribute("preload", "auto");
  audio.classList.add("audio");

  ////Source elemnet
  let source = document.createElement('source');
  source.id = `src-target${randomId}`;
  source.setAttribute("src",`${src}`)
  source.setAttribute("type",`audio/mpeg`)
  source.innerHTML = `Your browser does not support the audio element`
  //Append to containers and so. Nested!
  audio.appendChild(source);
  container.appendChild(icon);
  container.appendChild(audio);

//   container.innerHTML = 
// `<i class="material-icons clickable" id="audioPlayIcon${randomId}">play_circle_filled</i>
// <audio id="audioId${randomId}"  preload="auto" autobuffer class="audio">
//   <source id="src-target${randomId}" src="${src}" type="audio/mpeg"> Your browser does not support the audio element.
// </audio>`;

// DOMtarget.appendChild(container)

// const buttonSelect = document.getElementById(`audioPlayIcon${randomId}`);
// let audioSelect =  document.getElementById(`src-target${randomId}`);

// buttonSelect.addEventListener('click', function(){
icon.addEventListener('click', function(){
  console.log("POLLAS", "s")
  audio.play();
});

// audioSelect.parentElement.addEventListener('playing', function(){
  audio.addEventListener('playing', function(){
  icon.innerHTML = 'pause'
})

audio.addEventListener('pause', function(){
  icon.innerHTML = 'play_circle_filled'
})
return container
}
