
//*Dynamic header

 const header = document.getElementById("header");
 window.addEventListener("scroll", () => {
      if(scrollY > 16 ) {
           header.style.paddingTop = '1em';
           header.style.position = 'fixed';
           header.style.background = "linear-gradient(to right, #394152, #2ca546)";
           header.style.boxShadow = '1px 1px 10px 1px rgb(57, 65, 82)';
      } else {
           header.style.paddingTop = '2em';
           header.style.position = 'absolute';
           header.style.background = 'transparent'
           header.style.boxShadow = '';
      }
          
 });


//  const a_links = document.querySelectorAll('.nav-link');
//  a_links.forEach(a => {
//       const section = document.getElementById(a.getAttribute("section"));
//       a.addEventListener('click', () => {
//           window.scrollTo(0, section.offsetTop - 56.42);
//       })
//  }) 
  

//*Smooth scroll
$('a[href*="#"]').on('click', function(e) {
     e.preventDefault();

     $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 56.42,
     }, 500, 'linear')
});


//*Show sidebar nav
const sidebar_btn = document.getElementById("sidebar-btn");
const side_navbar = document.getElementById("side-navbar");
const close_sidebar_btn = document.getElementById("close-sidebar-btn");

sidebar_btn.addEventListener('click', openSidebar);
function openSidebar() {
     side_navbar.style.width = "250px"
}

close_sidebar_btn.addEventListener('click', function() { 
     side_navbar.style.width = "0px"
})


 