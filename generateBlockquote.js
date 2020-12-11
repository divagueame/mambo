export default function generateBlockquote(targetDom) {

let html = `<div class="col s8 ligthen-5 offset-s2">
<blockquote class="justified">
  Como regla general, las palabras que significan cosas, conceptos o ideas tienen siempre un genero: <span class="underlined">masculino</span> o <span class="underlined">femenino</span>.
  <br><br>Las palabras que terminan en <span class="underlined">-o</span> (boligrafo, edificio, amigo) son masculinas, y las palabras que terminan en <span class="underlined">-a</span> (casa, mesa, amiga) son femeninas. 
  <i class="orange-text text-darken-4 tiny material-icons">translate</i>
</blockquote>
</div></blockquote>`
 

targetDom.innerHTML = html

}