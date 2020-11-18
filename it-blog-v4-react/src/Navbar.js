import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  // search button onClick
  let history = useHistory();
  function handleSearchButton() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase().trim();
    if (input === " " || input === "" || input.length < 2) {
      return false;
    } else {
      history.push("/Search");
    }
  }

  function toggleMobileNavMenu() {
    document.querySelector(".nav-links").classList.toggle("open");
  }

  function hideSearchbar() {
    console.log("mobile search button was clicked!!!");
    document.querySelector(".search-subsection").classList.toggle("show-flex");
    document.querySelector(".nav-logo-subsection").classList.toggle("hide");
    document.querySelector(".hamburger").classList.toggle("hide");
    document.getElementById("mobile-search-button").classList.toggle("hide");
  }

  return (
    <nav>
      {/* <!-- nav top section --> */}
      <div id="nav-top-section">
        {/* <!-- hamburger --> */}
        <div onClick={toggleMobileNavMenu} class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        {/* <!-- nav logo --> */}
        <div class="nav-logo-subsection">
          <div class="nav-by-container">
            <Link to="/">IT Blog</Link>
            <p>by Christina Punla</p>
          </div>
        </div>
        {/* <!-- right search bar --> */}
        <div class="search-subsection">
          <div class="search-container">
            <input
              onKeyPress={function(e) {
                if (e.code === "Enter") {
                  handleSearchButton();
                }
              }}
              id="searchbar"
              type="text"
              name="search"
              placeholder="SEARCH..."
            />
            <button onClick={hideSearchbar} id="close-button">
              <i class="fas fa-times fa-lg"></i>
            </button>
          </div>
          <button onClick={handleSearchButton} id="search-button" type="submit">
            <i class="fa fa-search fa-lg"></i>
          </button>
        </div>
      </div>
      {/* <!-- nav bottom section --> */}
      <div id="nav-bottom-section">
        {/* <!-- nav links --> */}
        <ul class="nav-links">
          <li>
            <Link to="/OperatingSystems">OPERATING SYSTEMS</Link>
          </li>
          <li>
            <Link to="/Printers">PRINTERS</Link>
          </li>
          <li>
            <Link to="/Outlook">OUTLOOK</Link>
          </li>
          <li>
            <Link to="/Powerpoint">POWERPOINT</Link>
          </li>
          <li>
            <Link to="/ActiveDirectory">ACTIVE DIRECTORY</Link>
          </li>
          <li>
            <Link to="/Exchange">EXCHANGE</Link>
          </li>
        </ul>
        {/* <!-- mobile search button --> */}
        <button onClick={hideSearchbar} id="mobile-search-button">
          <i class="fa fa-search fa-2x"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
