function createCode() {
 var arr = ["</>", "i++", ">_", "{...}"]
 var elem = document.createElement('p');
 elem.style.position = "absolute";
 elem.style.fontWeight = 900;
 elem.style.fontSize = "20px";
 elem.style.color = "#00ffaa";
 let x = Math.round(Math.random() * 2);
 elem.innerText = arr[Math.round(Math.random() * 3)];
 elem.style.animationDuration = Math.round(Math.random() * 3)+1 + "s";
 elem.classList.add("animation-" + x);
 elem.classList.add("coding-coordinates");
 document.getElementsByClassName("about-me-subsection-one")[0].appendChild(elem);
 }

function typingCode() {
 createCode();
 setTimeout(typingCode, 1000);
}

// typingCode();

// document.styleSheets[0].cssRules[6].deleteRule("0%");
// document.styleSheets[0].cssRules[6].deleteRule("70%");
// document.styleSheets[0].cssRules[6].deleteRule("100%");
// document.styleSheets[0].cssRules[6].appendRule("0% { opacity: 0; }");
// document.styleSheets[0].cssRules[6].appendRule("70% { opacity: 1; color: red; }");
// document.styleSheets[0].cssRules[6].appendRule("100% { opacity: 0;	transform: translate(-100px, -100px);}");


// console.log(document.styleSheets[0]);
//console.log(document.styleSheets[0].cssRules[6]);
