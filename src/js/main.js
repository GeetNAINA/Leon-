// function openNav() {
//   document.querySelector(".nav").style.width = "100%";
// }


$(document).ready(function () {
  $(".header__bar").click(function () {
    $("body").toggleClass("showing");
  });

  $(".closebtn").click(function () {
    $("body").removeClass("showing");
  });
 });

// $(document).ready(function () {
//   $(".header__bar").click(function () {
//     $("body").toggleClass("shows");
//   });

// $( ".header__bar" ).click(function() {
//   document.querySelector(".nav").style.width = "100%";
// });

// function openNav(x) {
//   if (x.matches) { // If media query matches
//     document.querySelector(".nav").style.width = "100%";
//   } else {
//     document.querySelector(".nav").style.width = "550px";
//   }
// }
// var x = window.matchMedia("(max-width: 700px)");
// openNav(x); // Call listener function at run time1
// x.addEventListener(openNav);

// function openNav() {
//   var x = window.matchMedia("(max-width: 700px)")
//   openNav(x) // Call listener function at run time1
//   x.addListener(openNav)

//   if (x.matches) { // If media query matches
//     document.querySelector(".nav").style.width = "100%";
//   } else {
//     document.querySelector(".nav").style.width = "550px";
//   }
// }


// function closeNav() {
//   document.querySelector(".showing").style.width = "0";
// }


window.addEventListener("scroll", function () {
  var nav = document.querySelector(".header");
  nav.classList.toggle("sticky", window.scrollY > 0);
});






let loadMoreBtn = document.querySelector('.btn__loadmore');
let currentItem = 3;

loadMoreBtn.onclick = () => {
  event.preventDefault()
  let boxes = [...document.querySelectorAll('.portfolio__card')];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// new WOW().init();

// wow = new WOW(
//   {
//   boxClass:     'wow',      // default
//   animateClass: 'animated', // default
//   offset:       0,          // default
//   mobile:       true,       // default
//   live:         true        // default
// }
// )
// wow.init();