(function($){
  var $button;
  var top;
  $(function(){
    $button = $('.hire-fluid');
    if (!$button.length) return;
    top = $button.position().top;
    $(window).scroll(onScroll);
  });
  function onScroll() {
    if (!$button.hasClass('fixed')) {
      top = $button.position().top;
    }
    if ($(window).scrollTop() > top - 25) {
      $button.addClass('fixed');
    } else {
      $button.removeClass('fixed');
    }
  }
})(jQuery);
