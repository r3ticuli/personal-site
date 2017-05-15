$(function() { //shorthand for $(document).read(function(){})
  setCarouselButtons();
});

function setCarouselButtons() {
  var prev = document.getElementById('work-button-previous-pic');
  var next = document.getElementById('work-button-next-pic');

  initializeCarouselPositionButtons();

  setCarouselYearButtons()

  prev.onclick = carouselPrevious;
  next.onclick = carouselNext;
}

function initializeCarouselPositionButtons(){
  var a = $('.carousel-year-div')
  var max = a[0].children.length
  var min = a[0].children.length > 0 ? 1 : 0

  $("#work-carousel-position-current")[0].textContent = min;
  $("#work-carousel-position-max")[0].textContent = max;
}

function setCarouselYearButtons() {
  var buttons = $('#work-menu').find('button')
  for (var idx = 0; idx < buttons.length; idx++) {
    buttons[idx].onclick = function () {
      var selectedButton = $('.selected-work-button')
      if (selectedButton.is(this)) {
        // if div is already visible, do nothing
      } else {
        // button anim
        selectedButton.removeClass('selected-work-button')
        $(this).addClass('selected-work-button')

        // enable/disable year visiblity
        var index = $(this.parentElement).find(this).index()
        var yearDivs = $('.carousel-year-div')
        $('.visible-year').removeClass('visible-year')
        $(yearDivs[index]).addClass('visible-year')

        // reset placeholder
        var currDiv = $('#work-carousel-position-current')
        var maxDiv = $('#work-carousel-position-max')

        var currVal = $('.visible-year').find('.visible-artwork').index() + 1
        var maxValue = $('.visible-year').children().length

        currDiv.html(currVal)
        maxDiv.html(maxValue)
      }
    }
  }
}

function carouselPrevious() {
  var children =  $('.visible-year').children()
  var currIndex = $('.visible-year').find('.visible-artwork').index()

  var newIndex

  if (currIndex > 0) {
    newIndex = currIndex - 1
    $(children[currIndex]).removeClass('visible-artwork')
    $(children[newIndex]).addClass('visible-artwork')
  } else { // wrap around
    newIndex = children.length - 1
    $(children[currIndex]).removeClass('visible-artwork')
    $(children[newIndex]).addClass('visible-artwork')
  }

  $('#work-carousel-position-current').text(newIndex + 1) // + 1 for 1 indexing
}

function carouselNext() {
  var children =  $('.visible-year').children()
  var currIndex = $('.visible-year').find('.visible-artwork').index()

  var newIndex

  if (currIndex !== children.length - 1) {
    newIndex = currIndex + 1
    $(children[currIndex]).removeClass('visible-artwork')
    $(children[newIndex]).addClass('visible-artwork')
  } else { // wrap around
    newIndex = 0
    $(children[currIndex]).removeClass('visible-artwork')
    $(children[newIndex]).addClass('visible-artwork')
  }
  $('#work-carousel-position-current').text(newIndex + 1) // + 1 for 1 indexing
}
