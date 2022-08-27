const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    cleanerClicSlide(slides)
    slide.classList.add('active')
  })
});

function cleanerClicSlide(slides) {
  slides.forEach(slide => {
    slide.classList.remove('active')
  });
}
