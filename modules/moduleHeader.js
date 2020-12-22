export default function moduleHeader(titleText,icon){
  var moduleHeader = document.createElement('div');
  moduleHeader.innerHTML = `<h3 class="valign-wrapper"><i class="material-icons">${icon}</i><span>${titleText}</span></h3>`



  return moduleHeader
}