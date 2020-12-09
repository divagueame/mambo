export default function generateSidebarList() {
const slideOut = document.querySelector("#slide-out");
console.log(slideOut)
let levels = 3;
let lessons = [
    {
        'level': 1,
        'lessonNumber': 1,
        'lessonTitle': "1 Sustantivos",
        'lessonType': "explicacion",
        'id': "cmaiwedsfasdfsdf",
        'link': "sustantivos.html",
        'logo': "",
        'logoColor': ""
    }
    ,{
        'level': 1,
        'lessonNumber': 2,
        'lessonTitle': "2 Sustantivos 2",
        'lessonType': "actividad",
        'id': "asdfasdfasdf",
        'link': "actividadsustantivos.html",
        'logo': "",
        'logoColor': "blue"
    },
    {
        'level': 2,
        'lessonNumber': 1,
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
        'lessonNumber': 2,
        'lessonTitle': "5 Adjetivos",
        'lessonType': "explicacion",
        'id': "asdfasdasfasdf",
        'link': "adjetivos.html",
        'logo': "",
        'logoColor': ""
    },
    {
        'level': 3,
        'lessonNumber': 1,
        'lessonTitle': "6 Adjetivos",
        'lessonType': "explicacion",
        'id': "asdfasdasfasdf",
        'link': "adjetivos.html",
        'logo': "",
        'logoColor': ""
    }];





    function deployLevelHeaders(levels){
        let html = ``
        for(let i =0;levels>i;i++){
            
            let  levelSelector =  'levelHeader' + (1+i);
            let divider = '<div class="divider">';
                if(i+1==levels){
                    divider = ''
                }

            let levelHeader = `
            <li>
                <div class="collapsible-header red lighten-5">
                    <i class="material-icons">filter_drama</i>
                    Nivel ${i+1}
                </div>
            <div class="collapsible-body  ${levelSelector}"></div>
            ${divider}
            </li>`;
            html += levelHeader;
        }
        slideOut.innerHTML = html;
    };

    deployLevelHeaders(levels);


function deployLessonsInsideHeaders(lessons){
console.log(lessons[0]);
let level = lessons[0].level;
let selector = '.levelHeader' + level;
selector = document.querySelector(selector);
// selector.innerHTML = `<li>POLLAS<li>`
    lessons.forEach(function(item,i,array){
        let level = item.level;
        let levelSelector = '.levelHeader' + level;
        levelSelector = document.querySelector(levelSelector);
        let title = item.lessonTitle;
        let link = item.link;
        var html = `
        <li><a href="#!"> <span class="valign-wrapper"><i class="material-icons tiny">chevron_right</i>${title}</span></div></a></li>`;

        levelSelector.innerHTML += html;
    })
}

    

deployLessonsInsideHeaders(lessons)


}

