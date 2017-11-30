(function($){
  var blockPositions = [];

  $(function(){
    $(".show-menu").on("click", showMenu);
    $(".hide-menu").on("click", hideMenu);
    $(window).on("load resize", resize);
    $(window).on("scroll", scroll);
    resize();
    scroll();
  });
  function resize() {
    blockPositions = [];
    $(".block--custom-page-title, "+
      ".paragraph--type--content-with-background, "+
      ".block--splash-logo, "+
      ".block--collapsible-image-content, "+
      ".block--image-content, "+
      ".view-work"
    )
    .each(function(){
      blockPositions.push({
        top: $(this).position().top-75,
        isDark: true
      });
    });
    $(".block--main, "+
      ".paragraph--type--basic-content, "+
      ".paragraph--type--image-content, "+
      ".block--clients"
    )
    .each(function(){
      blockPositions.push({
        top: $(this).position().top-75,
        isDark: false
      });
    });
    blockPositions.sort(function(a,b){
      return a.top - b.top;
    });
  }
  function scroll() {
    var scrollTop = $(window).scrollTop();
    //show/hide header logo
    if ($("body").hasClass("path-frontpage") && scrollTop <= 120) {
      $("body").removeClass("show-logo");
    } else {
      $("body").addClass("show-logo");
    }

    //show the white or colour logo & main menu
    if (blockPositions.length < 2) {
      return;
    }
    for (var i=blockPositions.length-1; i >= 0 ; i--) {
      if (scrollTop >= blockPositions[i].top && (i == blockPositions.length-1 || scrollTop <= blockPositions[i+1].top)) {
        if (blockPositions[i].isDark) {
          $("body").addClass("bg-dark");
        } else {
          $("body").removeClass("bg-dark");
        }
        break;
      } else {
        continue;
      }
    }
  }
  function showMenu() {
    $("body").addClass("menu-open");
    return false;
  }
  function hideMenu() {
    $("body").removeClass("menu-open");
    return false;
  }
})(jQuery);
