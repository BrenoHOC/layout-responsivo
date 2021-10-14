// Importantando o React
import React from "react";

const Header = () => (

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a href="#" class="brand-logo">
    <img src="http://demos.upperthemes.com/koral/site1/wp-content/uploads/sites/9/2019/07/logo-koral-light.png"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <div class="place-center">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PAGES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PORTFOLIOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">HEADERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ELEMENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BLOG</a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(255,255,255,.5)" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</nav>

);

export default Header;