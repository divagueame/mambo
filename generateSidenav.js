export default function generateSidebarList() {
const slideOut = document.querySelector("#slide-out");

let lessons = [
    {
        'level': 1,
        'lessonTitle': "1 Sustantivos",
        'lessonType': "explicacion",
        'id': "cmaiwedsfasdfsdf",
        'link': "sustantivos.html",
        'logo': "",
        'logoColor': ""
    }
    ,{
        'level': 1,
        'lessonTitle': "2 Sustantivos 2",
        'lessonType': "actividad",
        'id': "asdfasdfasdf",
        'link': "actividadsustantivos.html",
        'logo': "",
        'logoColor': "blue"
    },
    {
        'level': 2,
        'lessonTitle': "3 Adjetivos",
        'lessonType': "explicacion",
        'id': "asdfasdasfasdf",
        'link': "adjetivos.html",
        'logo': "",
        'logoColor': ""
    },
    {
        'level': 2,
        'lessonTitle': "4 Adjetivos",
        'lessonType': "explicacion",
        'id': "asdfasdasfasdf",
        'link': "adjetivos.html",
        'logo': "",
        'logoColor': ""
    },
    {
        'level': 3,
        'lessonTitle': "5 Adjetivos",
        'lessonType': "explicacion",
        'id': "asdfasdasfasdf",
        'link': "adjetivos.html",
        'logo': "",
        'logoColor': ""
    },
    {
        'level': 3,
        'lessonTitle': "6 Adjetivos",
        'lessonType': "explicacion",
        'id': "asdfasdasfasdf",
        'link': "adjetivos.html",
        'logo': "",
        'logoColor': ""
    }];

    let html = `<li>
                <div class="collapsible-header red lighten-5"><i class="material-icons">filter_drama</i>
                 Nivel 1
                </div>`;

lessons.forEach(function(item,i,array){
    let level = item.level;
    let title = item.lessonTitle;
    let link = item.link;

    
    
    if((i!=0)&&(level>array[i-1].level)){
        html+= `</li>
        <div class="divider"></div>
        <li>
        <div class="collapsible-header red lighten-5"><i class="material-icons">filter_drama</i>
        Nivel ${item.level}
        </div>`
    } 
    html += `<div class="collapsible-body"><span class="valign-wrapper"><i class="material-icons tiny">chevron_right</i>${title}</span></div>`;

    
    
});


let html1 = `
<li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
<li><a href="#!">BUENA VIDA CONO Link</a></li>
<li><div class="divider"></div></li>
<li><a class="subheader">Subheader</a></li>
<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>`
slideOut.innerHTML  = html1;
}