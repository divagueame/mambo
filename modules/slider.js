import moduleHeader from './moduleHeader.js'
import displayAudio from './displayAudio.js';

export default function slider(obj, targetDom) {

  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  // Create the new element
var moduleDiv = document.createElement('div');
moduleDiv.classList.add("moduleDiv");
moduleDiv.classList.add("section");
// moduleDiv.classList.add("container");
let moduleHeaderDiv = moduleHeader(obj['moduleHeaderText'],obj['moduleHeaderIcon'])

let moduleContainer = document.createElement('section')
moduleContainer.classList.add("black")
moduleContainer.innerHTML = `
  <div class="carousel carousel-slider" data-indicators="true">
    <div class="carousel-fixed-item">
      <div class="container">
        <h1 class="white-text">Materialize Carousel</h1>
      </div>
    </div>
    <div class="carousel-item red lighten-2 white-text" href="#one!">
      <div class="container">
        <h2>First Slide</h2>
        <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
    <div class="carousel-item amber darken-2 white-text" href="#two!">
      <img src="./img/lesson1.1/door.jpg" class="img-responsive">
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <div class="container">
        <h2>Third Slide</h2>
        <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
    <div class="carousel-item blue white-text" href="#four!">
      <div class="container">
        <h2>Fourth Slide</h2>
        <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
  </div>
`; 

moduleDiv.appendChild(moduleHeaderDiv);
moduleDiv.appendChild(moduleContainer);
targetDomDefault.appendChild(moduleDiv);
//* <div id="audioContainer1" class="col s4 grey"></div> */
// let audio1 = `audio/lesson1/1.mp3`;
// let audioContainer1 = document.querySelector("#audioContainer1")
// displayAudio(audio1,audioContainer1)


var carousels = document.querySelectorAll('.carousel');
M.Carousel.init(  carousels,  
    {
        fullWidth: true,
        indicators: true
      });


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.carousel');
//   console.log(elems,"sd")
//   M.Carousel.init(elems,{
//     fullWidth: true
//   });
// });


}