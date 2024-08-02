$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 50) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 1600) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: [
        "Computer Science Engineer.",
        "Passionate Software Engineer.",
        "Full-Stack Developer.",
        "Software Developer.",
        "Linux System Administrator.",
        "Cloud Computing Enthusiast.",
        "Data Analysis Enthusiast.",
        "Lifelong learner 🤓💡." ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    var typed = new Typed(".typing-2", {
      strings: [
       "Computer Science Engineer.",
        "Passionate Software Engineer.",
        "Full-Stack Developer.",
        "Software Developer.",
        "Linux System Administrator.",
        "Cloud Computing Enthusiast.",
        "Data Analysis Enthusiast.",
        "Lifelong learner 🤓💡."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });

      $("#contactForm").submit(function(event) {
        event.preventDefault();
    
        // Get form data
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var yourEmail = $("hiddenEmail").val(); // Assuming a hidden field with your email
    
        // Construct mailto link
        var mailtoLink = "mailto:" + yourEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(name + ": " + message);
    
        // Open mailto link
        window.open(mailtoLink);
      });
  });
  
