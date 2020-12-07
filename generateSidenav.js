export default function generateSidebarList() {
const slideOut = document.querySelector("#slide-out");

let lessons = [
    {
        level: 1,
        lessonTitle: "1 Sustantivos",
        lessonType: "explicacion",
        id: "cmaiwedsfasdfsdf",
        link: "sustantivos.html",
        logo: "",
        logoColor: ""
    }
    ,{
        level: 1,
        lessonTitle: "2 Sustantivos 2",
        lessonType: "actividad",
        id: "asdfasdfasdf",
        link: "actividadsustantivos.html",
        logo: "",
        logoColor: "blue"
    },
    {
        level: 2,
        lessonTitle: "3 Adjetivos",
        lessonType: "explicacion",
        id: "asdfasdasfasdf",
        link: "adjetivos.html",
        logo: "",
        logoColor: ""
    },
    {
        level: 2,
        lessonTitle: "4 Adjetivos",
        lessonType: "explicacion",
        id: "asdfasdasfasdf",
        link: "adjetivos.html",
        logo: "",
        logoColor: ""
    },
    {
        level: 3,
        lessonTitle: "5 Adjetivos",
        lessonType: "explicacion",
        id: "asdfasdasfasdf",
        link: "adjetivos.html",
        logo: "",
        logoColor: ""
    },
    {
        level: 3,
        lessonTitle: "6 Adjetivos",
        lessonType: "explicacion",
        id: "asdfasdasfasdf",
        link: "adjetivos.html",
        logo: "",
        logoColor: ""
    }];

    let html = `<li class="">
                <div class="collapsible-header red lighten-5"><i class="material-icons">filter_drama</i>
                 Nivel 1
                </div>`;

lessons.forEach(function(item,i,array){
    let level = item.level;
    let title = item.lessonTitle;
    let link = item.link;
    html += `<div class="collapsible-body"><span class="valign-wrapper"><i class="material-icons tiny">chevron_right</i>${title}</span></div>`;
    
    

    if((item.level!=array[i-1].level)){
        html+= `</li>

                <div class="divider"></div>

                <li>
                <div class="collapsible-header red lighten-5"><i class="material-icons">filter_drama</i>
            Nivel ${item.level}
        </div>`;
        
    }
});



slideOut.innerHTML  = html;
}