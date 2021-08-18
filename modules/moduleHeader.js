export default function moduleHeader(titleText,icon,moduleBasicText){
  // console.log("BLANK SENTENCEs YES")
  var moduleHeader = document.createElement('div');
  moduleHeader.innerHTML = `<h3 class="valign-wrapper"><i class="material-icons moduleHeader-icon">${icon}</i><span>${titleText}</span></h3>`;

  if((moduleBasicText!="")&&(moduleBasicText!=undefined)){
    moduleHeader.innerHTML += ` <p>${moduleBasicText}</p>`
  }



  return moduleHeader
}