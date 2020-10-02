var UIController = (function () {

 var DOMstrings = {
  searchSubsection: ".search-subsection",
  searchButton: "search-button",
  searchbar: "searchbar",
  searchbarCloseButton: "close-button",
  mobileSearchButton: "mobile-search-button",
  hamburger: ".hamburger",
  navLogo: ".nav-logo-subsection",
  navLinks: ".nav-links",
  failedSearchPage: "failed-search-page",
  failedSearchMessage: "failed-search-message",
  header: "headline",
  footer: "footer"
 };

 var articles = Array.from(document.getElementsByClassName("article"));
 var articleTitles = document.getElementsByClassName("article-title");

 var setupEventListeners = function () { 

  // Searchbar Event Listener
  // if user clicks the search button
  document.getElementById(DOMstrings.searchButton).addEventListener("click", UIController.search);
  // or presses enter
  document.getElementById(DOMstrings.searchbar).addEventListener(
   "keypress",
   function (e) {
    if (e.keyCode === 13) {
     UIController.search();
    }
   },
   false
  ); 

  // Mobile Search Button Event Listener
  // on click show mobile searchbar and hide hamburger menu and navLogo
  document.getElementById(DOMstrings.mobileSearchButton).addEventListener("click", UIController.hideSearchbar);


 // Searchbar Close Button Event Listener
  document.getElementById(DOMstrings.searchbarCloseButton).addEventListener("click", UIController.hideSearchbar);

  // Hamburger Event Listener
  document.querySelector(DOMstrings.hamburger).addEventListener("click", UIController.toggleVerticalNavMenu);
 }

 return {

  hideAllArticles: function() {
   // hide all articles
   for (let i = 0; i < articles.length; i++) {
    articles[i].classList.remove("show-flex");
    articles[i].classList.add("hide");
   }
   // hide search page
   document.getElementById(DOMstrings.failedSearchPage).classList.remove("show-block");
   document.getElementById(DOMstrings.failedSearchPage).classList.add("hide");
   // hide homepage
   document.getElementsByClassName(DOMstrings.header)[0].classList.remove("show-block");
   document.getElementsByClassName(DOMstrings.header)[0].classList.add("hide");
   // hide footer
   document.getElementById(DOMstrings.failedSearchPage).classList.remove("show-block");
   document.getElementById(DOMstrings.failedSearchPage).classList.add("hide");
  },

  showArticles: function(category) {
  for (let i = 0; i < category.length; i++) {
   category[i].classList.remove("hide");
   category[i].classList.add("show-flex");
  }
 },

  showFooter: function() {
  document.querySelector(DOMstrings.footer).classList.remove("hide");
  document.querySelector(DOMstrings.footer).classList.add("show-block");
 },

 hideSearchbar: function() {
  document.querySelector(DOMstrings.searchSubsection).classList.toggle("show-flex"); document.querySelector(DOMstrings.navLogo).classList.toggle("hide");
  document.querySelector(DOMstrings.hamburger).classList.toggle("hide");
  document.getElementById(DOMstrings.mobileSearchButton).classList.toggle("hide");
 },

 toggleVerticalNavMenu: function() {
  document.querySelector(DOMstrings.navLinks).classList.toggle("open");
  console.log("workin'");
  console.log(document.querySelector(DOMstrings.navLinks));
 },

 search: function() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase().trim();

  // ignore empty strings, spaces, and strings less than 3 char in length
  if (input === " " || input === "" || input.length < 3) {
   return false;
  }

  // hide all articles
  UIController.hideAllArticles();

  // if no matches found show failed-search-page
  let matches = false;
  // display matches
  for (i = 0; i < articleTitles.length; i++) {
   if (articleTitles[i].innerText.toLowerCase().includes(input)) {
    articleTitles[i].parentNode.parentNode.classList.add("show-flex");
    matches = true;
   }
   UIController.showFooter();
  }

  // display failed-search-page
  if (!matches) {
   document.getElementById(DOMstrings.failedSearchMessage).innerText =
    "Sorry, we couldn't find a match for: \"" + input + '"';
   document.getElementById(DOMstrings.failedSearchPage).classList.remove("hide");
   document.getElementById(DOMstrings.failedSearchPage).classList.add("show-block");
  }

  // reset input field
  document.getElementById(DOMstrings.searchbar).value = "";
 },

  init: function () {
   setupEventListeners();
  }
 }

})();

UIController.init(); // initialize EventListeners

// articles by category
const osArticles = document.getElementsByClassName("operating-systems");
const printersArticles = document.getElementsByClassName("printers");
const outlookArticles = document.getElementsByClassName("outlook");
const pptArticles = document.getElementsByClassName("powerpoint");
const adArticles = document.getElementsByClassName("active-directory");
const eacArticles = document.getElementsByClassName("exchange");

// Nav Menu Controller
var navController = (function (UICtrl) {

 return {

  navFilterArticles: function(category) {
  UICtrl.hideAllArticles(); // hide all pages
  UICtrl.showArticles(category); // show articles by category
  UICtrl.showFooter(); // show footer
  document.querySelector(".nav-links").classList.toggle("open");
 }
}
})(UIController);
