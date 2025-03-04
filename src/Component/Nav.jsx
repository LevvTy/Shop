import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <div className="">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="#">
            BOUTIQUE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
