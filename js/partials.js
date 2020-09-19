$(window).scroll(function() {
    if ($(window).scrollTop() > 70) {
        $('#nav').addClass('nav-active');
    } else {
        $('#nav').removeClass('nav-active');
    }
});

// for (var i=0; i < document.body.childNodes.length)
const nav = document.getElementById("nav");
ScrollReveal().reveal(nav, {
  origin: "top",
  distance: "10px",
  delay: "100"
})
const sections = document.getElementsByTagName("section");
for (i=0; i<sections.length; i++) {
  ScrollReveal().reveal(sections[i], {
    origin: 'bottom',
    distance: '10px',
    delay: "200"
  });
}
