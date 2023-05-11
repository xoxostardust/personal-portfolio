function show() {
    let code = document.querySelectorAll(".code")

    for (let i = 0; i < code.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = code[i].getBoundingClientRect().top;
        let elementVisible = 150;
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