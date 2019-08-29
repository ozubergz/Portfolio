$(window).on("load", function () {
  const img = new Image();
  $(img).attr({
    src: '/public/images/rising_thumbnail.jpg',
    class: 'thumbnail'
  });
  $('#project1').append(img);

  const constructionImg = new Image();
  $(constructionImg).attr({
    src: '/public/images/construction.jpg',
    class: 'construction-thumbnail'
  });
  $('#construction-img').append(constructionImg);
  
  
});
