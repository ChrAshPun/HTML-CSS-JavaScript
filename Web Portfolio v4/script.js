    // hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // FADE INS
    const sections = Array.prototype.slice.call(document.querySelectorAll(".fade-in"));

    const allprojects = Array.prototype.slice.call(
      document.querySelectorAll(".scaleout-container.fade-in")
    );

    // control the circumstances under which the observer's callback is invoked
    const options = {
      threshold: 0.5 
    };

    // create the observer
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else if (entry.target.id == "helpdesk-section") {
          entry.target.classList.add("fadein-left");
          observer.unobserve(entry.target);
        }
        else if (entry.target.id == "webdev-section") {
          entry.target.classList.add("fadein-right");
          observer.unobserve(entry.target);
        } else if (entry.target.id == "cert-section") {
          certAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    allprojects.forEach(section => {
      observer.observe(section);
    });

    // certification animation
    var lines = document.getElementsByClassName("downward-line");
    var certtitles = document.getElementsByClassName("cert-title");

    function certAnimation() {
      // downward line animation
      for (let i = 0; i < lines.length; i++) {
        setTimeout(function () {
          lines[i].classList.add("downward-animation");
          if (i % 2 === 0) {
            lines[i].classList.add("long");
          } else {
            lines[i].classList.add("short");
          }
        }, 200 * i);
        setTimeout(function () {
          certtitles[i].classList.add("cert-appear");
          console.log(certtitles[i]);
        }, 200 * i);
      }
    }

    // get slides as an Array
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button--right");
    const prevButton = document.querySelector(".carousel-button--left");
    // get width of slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Function to set each slides position
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    }
    // arrange the slides next to each other
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    }

    const currentSlide = track.querySelector(".current-slide");

    // carousel prev button EventListener
    prevButton.addEventListener('click', e => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;

      // move to next slide
      moveToSlide(track, currentSlide, prevSlide);

        if (currentSlide === slides[1]) {
          prevButton.classList.add("is-hidden");
        }
        else {
          prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
        }
     
    });

    // carousel next button EventListener
    nextButton.addEventListener('click', e => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      
      // move to next slide
      moveToSlide(track, currentSlide, nextSlide);

      function hideCarouselButtons() {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
      }

      if (window.innerWidth > 1470) {
        if (currentSlide === slides[1]) {
          nextButton.classList.add("is-hidden");
        }
        else {
          hideCarouselButtons();
        }
      }

      if (window.innerWidth < 1470) {
        if (currentSlide === slides[2]) {
          nextButton.classList.add("is-hidden");
        }
        else {
          hideCarouselButtons();
        }
      }

      if (window.innerWidth < 1160) {
        if (currentSlide === slides[3]) {
          nextButton.classList.add("is-hidden");
        }
        else {
          hideCarouselButtons();
        }
      }

      if (window.innerWidth < 800) {
        if (currentSlide === slides[4]) {
          nextButton.classList.add("is-hidden");
        }
        else {
          hideCarouselButtons();
        }
      }
    });

    // MEDIA QUERY

    function imgChange() {
      if (window.innerWidth < 800) {
        document.querySelector(".itblog-screenshot").style.display = "none";
      }
      else if (window.innerWidth < 1050) {
        document.querySelector(".itblog-screenshot").style.display = "block";
        document.querySelector(".itblog-screenshot").src = "./png/ITBlog3.png";
      }
      else if (window.innerWidth > 1050) {
        document.querySelector(".itblog-screenshot").style.display = "block";
        document.querySelector(".itblog-screenshot").src = "./png/ITBlog2.png";
      }
    }

    // invoke on refresh
    imgChange();
    window.addEventListener('resize', imgChange);