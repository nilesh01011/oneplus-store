$(window).on("load",function(arg){
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // ============Navbar-Style===============
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $("nav.navbar").addClass("navbar-shrink");
    } else {
      $("nav.navbar").removeClass("navbar-shrink");
    }
  });

  // ============Features-Owl================
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // =================================App-Screenshorts====================================
  $(".screenshorts-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // =================================Testimonials-section====================================
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // =================================Team-section====================================
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // ====================================scrollit====================================

  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "linear", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -50, // offste (in px) for fixed top navigation
  });

  // ===============================navbar-collapse======================================
  $("nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  // ===============================dark-mode==============================
  function toggleTheme(){
    if(localStorage.getItem("Mera App") !== null){
      if(localStorage.getItem("Mera App") === "dark"){
        $("body").addClass("dark");
      }
      else{
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();
  $(".toggle-theme").on("click", function(){
    $("body").toggleClass("dark");
    if($('body').hasClass('dark')){
      localStorage.setItem("Mera App", "dark");
    }else{
      localStorage.setItem("Mera App", "light");
    }
    updateIcon();
  });
  function updateIcon(){
    if($('body').hasClass('dark')){
      $('.toggle-theme i').removeClass("fa-moon");
      $('.toggle-theme i').addClass("fa-sun");
    }else{
      $('.toggle-theme i').removeClass("fa-sun");
      $('.toggle-theme i').addClass("fa-moon");
    }
  }
});
