
document.documentElement.scrollTop = 0;
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document.getElementsByClassName('nav-bar')[0]
const navLinks = document.querySelectorAll('nav__links');

toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
});
window.onclick = function(event) {
  if (!event.target.matches('.toggle-button')) {
    var dropdowns = document.getElementsByClassName("nav-bar");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}
/*function myFunction() {
  document.documentElement.style.scrollBehavior = "smooth";
}*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "8.5px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "11px 10px";
    document.getElementById("logo").style.fontSize = "30px";
  }
}
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav-bar ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("actives");
    if (li.classList.contains(current)) {
      li.classList.add("actives");
    }
  });
});
$(document).ready(function(){
  var scrollLink = $('.nav__links');

  scrollLink.click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop:$(this.hash).offset().top
    }, 1000)
  })
})



