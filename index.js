//index.js

function fadeInAboutSection () {
  var contentList = $("#content-list")
  console.log("chrome rules")
}

$(document).ready(function(){
  var aboutButton = $("#about-button")
  if (aboutButton.addEventListener)
      aboutButton.addEventListener('click', fadeInAboutSection, false);
  else if (aboutButton.attachEvent)
      aboutButton.attachEvent('onclick', fadeInAboutSection);
})
