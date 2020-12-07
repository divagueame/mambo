export default function generateSidebarList() {
    


const slideOut = document.querySelector("#slide-out");

let html12 = `
<li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
<li><a href="#!">CAGO A A</a></li>
<li><a href="#!">Second Link</a></li>
<li><a href="#!">Second Link</a></li>

<li><a href="#!">sdfasdfdsa</a></li>

<li><div class="divider"></div></li>
<li><a class="subheader">Subheader</a></li>
<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>`

let html1 = `    <li>
<div class="collapsible-header"><i class="material-icons">filter_drama</i>Fisrst</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>
<li><div class="divider"></div></li>

<li>
<div class="collapsible-header"><i class="material-icons">place</i>Second</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>
<li>
<div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>`

slideOut.innerHTML  = html1;



}