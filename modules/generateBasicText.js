export default function generateBasicText(obj, targetDom) {
  console.log("GENERATE BASIC")

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
// moduleDiv.classList.add("container");
moduleDiv.innerHTML = `
<h3 class="valign-wrapper"><i class="material-icons">star</i><span> 1.1 section setionc sdf asd fasd</span></h3>

  <p class="justified">Bloremrema e loremlorem dsfa sdfasdfasdfdsf asd fasd f loremlLOremn lorem lLOremnlor emlLO remn loremlLOr emnloremlLOre m  nas

  
</p>
<br>
<br>
<br>
<br>
<br>

<a id="player1" href="javascript:void(0)">
    <i class="material-icons orange-text">play_circle_filled</i> 
</a>


<br></br>
<br>
<br>
</br></br>
`; 


// Insert the element after our target element
// targetDomDefault.parentNode.insertBefore( moduleDiv, targetDomDefault );

targetDomDefault.appendChild(moduleDiv);


var myaudio = new Audio('/audio/lesson1.1/1.mp3');

myaudio.onended = function(){
  player1.firstElementChild.innerHTML = 'play_circle_filled'
}
const player1 = document.querySelector('#player1');
player1.addEventListener('click', function(){

  if(myaudio.pause){
    myaudio.play();
    console.log(player1.firstElementChild);
    player1.firstElementChild.innerHTML = 'pause_circle_filled'
  }else{
    myaudio.pause()
  }
  
  
})


}