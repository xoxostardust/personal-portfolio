function show() {
    let code = document.querySelectorAll(".code")

    for (let i = 0; i < code.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = code[i].getBoundingClientRect().top;
        let elementVisible = 300;
        if (elementTop < windowHeight - elementVisible) {
            code[i].classList.add("active");
          } else {
            code[i].classList.remove("active");
          }
        }
      }

      window.addEventListener("scroll", show);

    //   scrollinggggg check
      show();
    




// select the slides
const slides = document.querySelectorAll(".sec");

// loop slides and set translateX

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide
// let currentSlide = 0;

//  next slide button
const nextSlide = document.querySelector("#next");

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    console.log(curSlide, slide, indx);
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
  });
});

let curSlide = 0;

let maxSlide = slides.length -1;

const prevSlide = document.querySelector("#prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    console.log(curSlide, slide, indx);
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

