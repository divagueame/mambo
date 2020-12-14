export default function examplesCard(obj, targetDom) {
    console.log("ExamplesCard init");

    let targetDomDefault = document.querySelector('.lessonContainer');
    if(targetDom){
        targetDomDefault = document.querySelector(targetDom);
    }
    
    

let html = `



<div class="row">
<h5>Por ejemplo...</h5>
  <!-- FIRST CARD -->
  <div class="col s3 offset-s1">
    <div class="card">
      <div class="card-image">
        <a class="activator btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        <img  class="activator" src="./img/lesson1.1/boy.jpg">
       
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">El niñ<span class="red-text">o</span></span>
        <p><a href="#">El niñ<span class="red-text">o</span></a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Ejemplo:<i class="material-icons right">close</i></span>
        <p>El niño tiene un juguete.</p>
        <p class="lighten-5">The boy has a toy</p>
      </div>
    </div>
  </div>
    <!-- Second CARD -->
    <div class="col s3 offset-s1">
      <div class="card">
        <div class="card-image">
          <a class="activator btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          <img  class="activator" src="./img/lesson1.1/boy.jpg">
         
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">El niñ<span class="red-text">o</span></span>
          <p><a href="#">El niñ<span class="red-text">o</span></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Ejemplo:<i class="material-icons right">close</i></span>
          <p>El niño tiene un juguete.</p>
          <p class="lighten-5">The boy has a toy</p>
        </div>
      </div>
    </div>
      <!-- Third CARD -->
      <div class="col s3 offset-s1">
        <div class="card">
          <div class="card-image">
            <a class="activator btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            <img  class="activator" src="./img/lesson1.1/boy.jpg">
           
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">El niñ<span class="red-text">o</span></span>
            <p><a href="#">El niñ<span class="red-text">o</span></a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Ejemplo:<i class="material-icons right">close</i></span>
            <p>El niño tiene un juguete.</p>
            <p class="lighten-5">The boy has a toy</p>
          </div>
        </div>
      </div>
`

targetDomDefault.innerHTML += html;


}