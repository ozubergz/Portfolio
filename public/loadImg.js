$(window).on("load", function () {

  const img = new Image();
  $(img).attr({
    src: '/public/images/rising_thumbnail.jpg',
    class: 'thumbnail'
  });

  $('#project1').append(img);

});
