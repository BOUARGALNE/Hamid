$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop()> 0){
          $('.top').show();
      }else{
        $('.top').hide();
      }
    });
    $('a[href*="#"]').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
   
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500, 'linear'
      );
   });
});



let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");


darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
