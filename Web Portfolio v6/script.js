// make it rain binary numbers
function createRainDrop() {
  var elem = document.createElement("p");
  elem.innerText = Math.round(Math.random() * 1);
  elem.style.left = Math.round(Math.random() * 250) + "px";
  elem.style.animationDuration = Math.round(Math.random() * 3) + "s";
  elem.classList.add("raindrop");
  document.getElementById("rain-area").appendChild(elem);
}

function makeItRain() {
  createRainDrop();
  createRainDrop();
  setTimeout(makeItRain, 400);
}

makeItRain();

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// certification animation
var lines = document.getElementsByClassName("downward-line");
var certtitles = document.getElementsByClassName("cert-title");

function certAnimation() {
  // downward line animation
  for (let i = 0; i < lines.length; i++) {
    setTimeout(function() {
      lines[i].classList.add("downward-animation");
      if (i % 2 === 0) {
        lines[i].classList.add("long");
      } else {
        lines[i].classList.add("short");
      }
    }, 300 * i);
    setTimeout(function() {
      certtitles[i].classList.add("cert-appear");
      console.log(certtitles[i]);
    }, 300 * i);
  }
}

// sections to be observed
const certsection = document.getElementById("cert-section");

// control the circumstances under which the observer's callback is invoked
const options = {
  threshold: 0.4
};

// create the observer
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else if (entry.target.id == "cert-section") {
      certAnimation();
      observer.unobserve(entry.target);
    }
  });
}, options);

if (window.innerWidth > 800 && window.innerWidth < 1100) {
  console.log("innerWidth is working.");
  certAnimation();
} else {
  observer.observe(certsection);
}

// Tip Calculator Buttons
const graymodebtn = document.getElementById("tip-gray-btn");
graymodebtn.addEventListener(
  "click",
  function() {
    document.getElementById("tip-app-background").className =
      "gray-mode-tip-bg";
    document.getElementById("tip-container").className =
      "gray-mode-tip-container";
    document.getElementById("tip-bill-input").className = "gray-mode-tip-input";
    document.getElementById("tip-percent-input").className =
      "gray-mode-tip-input";
    document.getElementById("tip-people-input").className =
      "gray-mode-tip-input";
    document.getElementById("tip-submit-btn").className =
      "gray-mode-tip-submit";
  },
  false
);

const greenmodebtn = document.getElementById("tip-green-btn");
greenmodebtn.addEventListener(
  "click",
  function() {
    document.getElementById("tip-app-background").className =
      "green-mode-tip-bg";
    document.getElementById("tip-container").className =
      "green-mode-tip-container";
    document.getElementById("tip-bill-input").className =
      "green-mode-tip-input";
    document.getElementById("tip-percent-input").className =
      "green-mode-tip-input";
    document.getElementById("tip-people-input").className =
      "green-mode-tip-input";
    document.getElementById("tip-submit-btn").className =
      "green-mode-tip-submit";
  },
  false
);
