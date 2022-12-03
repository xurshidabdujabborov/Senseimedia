const scrollBtn = document.querySelector('.scrollToTop-btn')
$("header .activeBars").click(function(){
    $("header .activeMenuBars").slideToggle(1000)
})
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 300)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })

window.addEventListener("load", function (e) {
    $(".say .owl-carousel").owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
      });
})