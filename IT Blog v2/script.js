// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener('click', () => {
 navLinks.classList.toggle('open');
});

// hide all articles function
const articles = Array.from(document.getElementsByClassName("article"));
const articleTitles = document.getElementsByClassName("article-title");
const failedSearchPage = document.getElementById("failed-search-page");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

function hideAllArticles() {
 // hide all articles
 for (let i = 0; i < articles.length; i++) {
  articles[i].classList.remove("show-flex");
  articles[i].classList.add("hide");
 }
 // hide search page
 failedSearchPage.classList.remove("show-block");
 failedSearchPage.classList.add("hide");
 // hide homepage
 header.classList.remove("show-block");
 header.classList.add("hide");
 // hide footer
 footer.classList.remove("show-block");
 footer.classList.add("hide");
}

// all articles as arrays based on category
const osArticles = document.getElementsByClassName("operating-systems");
const printersArticles = document.getElementsByClassName("printers");
const outlookArticles = document.getElementsByClassName("outlook");
const pptArticles = document.getElementsByClassName("powerpoint");
const adArticles = document.getElementsByClassName("active-directory");
const eacArticles = document.getElementsByClassName("exchange");

// navigation bar function
var navCategory = function (category) {

 // filter articles function - based on category
 function showArticles(category) {
  for (let i = 0; i < category.length; i++) {
   category[i].classList.remove("hide");
   category[i].classList.add("show-flex");
  }
 }

 // hide all pages
 hideAllArticles();
 // show the articles based on category
 showArticles(category);
 navLinks.classList.toggle('open');
}

// search module
var searchController = (function () {

 // run search function after search button is pressed or user presses Enter
 var search = function () {

  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase().trim();

  // ignore empty strings, spaces, and strings less than 3 char in length
  if (input === ' ' || input === "" || input.length < 3) {
   return false;
  }

  // hide all pages
  hideAllArticles();

  // if using mobile searchbar, hide it after executing a search
  if (window.innerWidth < 1170) {
   toggleSearchbar();
  }

  // if no matches found show failed-search-page
  let matches = false;
  // display matches
  for (i = 0; i < articleTitles.length; i++) {
   if (articleTitles[i].innerText.toLowerCase().includes(input)) {
    articleTitles[i].parentNode.parentNode.classList.add("show-flex");
    matches = true;
   }
  }

  // display failed-search-page
  if (!matches) {
   document.getElementById("failed-search-message").innerText = 'Sorry, we couldn\'t find a match for: "' + input + '"';
   failedSearchPage.classList.remove("hide");
   failedSearchPage.classList.add("show-block");
  }

  // reset input field 
  document.getElementById('searchbar').value = '';
 }

 // if user clicks the search button
 document.getElementById("search-button").addEventListener("click", search);
 // or presses Enter
 document.getElementById("searchbar").addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
   search();
  }
 }, false);

})();

const mobileSearchButton = document.getElementById("mobile-search-button");
const searchbarCloseButton = document.getElementById("close-button");
const searchbar = document.querySelector(".search-container");
const navLogo = document.querySelector(".nav-logo-subsection");

// toggle mobile search bar
function toggleSearchbar() {
 searchbar.classList.toggle('show-flex');
 navLogo.classList.toggle('hide');
 mobileSearchButton.classList.toggle('hide');
}

// show the mobile search bar when you click on the mobile search button
mobileSearchButton.addEventListener('click', () => {
 toggleSearchbar();
});

// hide the mobile search bar when you click on the close button
searchbarCloseButton.addEventListener('click', () => {
 toggleSearchbar();
});