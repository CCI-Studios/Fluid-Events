(function($){
  $(function(){
    $('.paragraph--type--basic-content, .paragraph--type--image-content, .paragraph--type--content-with-background, .block--collapsible-image-content, .block--image-content').addClass('hide');
    $(window).on('resize', onResize);
    $(window).on('scroll', onScroll);
    onResize();
    onScroll();
    $('.block--splash-logo').addClass('animate');
  });
  function onResize() {
    $('.block--splash-logo .logo2').attr('style', 'width:'+$('.block--splash-logo .logo-container').width()+'px !important');
  }
  function onScroll() {
    var scrollTop = $(window).scrollTop() + $(window).height();
    $('.paragraph--type--basic-content, .paragraph--type--image-content, .paragraph--type--content-with-background, .block--collapsible-image-content, .block--image-content').each(function(){
      var threshold = 250;
      if ($(window).height() > 800) {
        threshold = $(window).height() * 0.5;
      }
      if ($(this).position().top <= scrollTop - threshold) {
        $(this).addClass('show');
      } else {
        $(this).removeClass('show');
      }
    });
  }
})(jQuery)
