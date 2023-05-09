function show() {
    let middle = document.querySelectorAll(".middle")

    for (let i = 0; i < middle.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = middle[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            middle[i].classList.add("active");
          } else {
            middle[i].classList.remove("active");
          }
        }
      }

      window.addEventListener("scroll", show);

    //   scrollinggggg check
      show();