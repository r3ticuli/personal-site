$(function() { //shorthand for $(document).read(function(){})
  setCarouselButtons();
});

function setCarouselButtons() {
  var prev = document.getElementById('work-button-previous-pic');
  var next = document.getElementById('work-button-next-pic');

  setCarouselMenuButtons()

  prev.onclick = carouselPrevious;
  next.onclick = carouselNext;
}


function initializeCarouselPositionButtons(){
  var a = $('.category')
  var max = a[0].children.length
  var min = a[0].children.length > 0 ? 1 : 0

  $("#work-carousel-position-current")[0].textContent = min;
  $("#work-carousel-position-max")[0].textContent = max;
}

function setCarouselMenuButtons() {
  var buttons = $('#work-menu').find('button')
  for (var idx = 0; idx < buttons.length; idx++) {
    buttons[idx].onclick = function () {
      var selectedButton = $('.selected-project')
      if (selectedButton.is(this)) {
        // if div is already visible, do nothing
      } else {
        // button anim
        selectedButton.removeClass('selected-project')
        $(this).addClass('selected-project')

        var projIdx = $('button.project').index(this)

        // swap category divs
        var categoryLists = $('li.category')
        var categoryDivs = $('div.category')
        var catIdx = $('li.category').find('.selected-project').parent().parent().parent().parent().index()
        $('div#visible-category').removeAttr('id')
        $(categoryDivs[catIdx]).attr('id','visible-category')

        // set project div
        var projectDivs = $('div.project')
        $('div#visible-project').removeAttr('id')
        $(projectDivs[projIdx]).attr('id','visible-project')

        // set visible image
        $('img#visible-image').removeAttr('id')
        var images = $(projectDivs[projIdx]).find('img')
        $(images[0]).attr('id','visible-image')

        // set descrip
        $('span#visible-description').removeAttr('id')
        var descrips = $('span.carousel-description');
        $(descrips[projIdx]).attr('id', 'visible-description')

        // reset placeholder
        var currDiv = $('#current-position')
        var maxDiv = $('#max-position')

        var currVal = $('#visible-project').find('#visible-image').index() + 1
        var maxValue = $('#visible-project').children().length

        currDiv.html(currVal)
        maxDiv.html(maxValue)
      }
    }
  }
}

function carouselPrevious() {
  var children =  $('#visible-project').children()
  var currIndex = $('#visible-project').find('#visible-image').index()

  var newIndex

  if (currIndex > 0) {
    newIndex = currIndex - 1
    $(children[currIndex]).removeAttr('id')
    $(children[newIndex]).attr('id','visible-image')
  } else { // wrap around
    newIndex = children.length - 1
    $(children[currIndex]).removeAttr('id')
    $(children[newIndex]).attr('id','visible-image')
  }

  $('#current-position').text(newIndex + 1) // + 1 for 1 indexing
}

function carouselNext() {
  var children =  $('#visible-project').children()
  var currIndex = $('#visible-project').find('#visible-image').index()

  var newIndex

  if (currIndex !== children.length - 1) {
    newIndex = currIndex + 1
    $(children[currIndex]).removeAttr('id')
    $(children[newIndex]).attr('id','visible-image')
  } else { // wrap around
    newIndex = 0
    $(children[currIndex]).removeAttr('id')
    $(children[newIndex]).attr('id','visible-image')
  }
  $('#current-position').text(newIndex + 1) // + 1 for 1 indexing
}
