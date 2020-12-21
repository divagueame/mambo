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



<br></br>as


<audio src="audio/lesson1/1.mp3" controls preload="auto" />
asdfasd
<p>as</p>
<audio src="audio/lesson1/2.mp3" controls preload="auto" />

<br>
<br>
</br></br>
`; 


// Insert the element after our target element
// targetDomDefault.parentNode.insertBefore( moduleDiv, targetDomDefault );

targetDomDefault.appendChild(moduleDiv);



}