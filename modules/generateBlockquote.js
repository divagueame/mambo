export default function generateBlockquote(obj, targetDom) {
  let targetDomDefault = document.querySelector('.lessonContainer');
  if(targetDom){
      targetDomDefault = document.querySelector(targetDom);
  }
  

  let text1 = `
  Como regla general, las palabras que significan cosas, conceptos o ideas tienen siempre un genero: <span class="underlined">masculino</span> o <span class="underlined">femenino</span>.
  `;

let html = `
<div class="row">
<blockquote class="justified col s8 offset-s2">
  ${text1}
  <br>
  <br>
  Las palabras que terminan en <span class="underlined">-o</span> (boligrafo, edificio, amigo) son masculinas, y las palabras que terminan en <span class="underlined">-a</span> (casa, mesa, amiga) son femeninas. 
  <i class="orange-text text-darken-4 tiny material-icons">translate</i>
</blockquote>
</div>
`
 

targetDomDefault.innerHTML += html

}