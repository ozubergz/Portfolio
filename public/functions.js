//reset page to top when refreshed
$(window).on('beforeunload', function () {
  $(this).scrollTop(0);
});

$(window).scroll(function() {
  let scrollTop = $(this).scrollTop();
  // let height = $(this).height();

  //fades out parallax logo when scrolling down
  $('.logo').css({
    opacity: function() {
      opacity = (1 - (scrollTop / 400));
      return opacity;
    }
  });

  //move items up when scrolled down
  if(scrollTop > 0) {
    $('.projects, .resume, .contact').addClass('animateUp');
  } else {
    $('.projects, .resume, .contact').removeClass('animateUp');
  }
  
});

//show collapse only once when clicked multiple times
$('div[data-toggle="collapse"]').on('click', function(e) {
  let target = $(this).data('target');
  if($(target).hasClass('show')) {
    e.stopPropagation();
  }
});

//if screen width is greater than mobile screen, hide overlay text
$(window).resize(function () {
  const width = $(window).width();
  if (width > 767) {
    $('.overlay-text').hide();
  }
});

$('#show-info').click(function() {
  $('.overlay-text').show();
});

$('#hide-info').click(function() {
  $('.overlay-text').hide();
});