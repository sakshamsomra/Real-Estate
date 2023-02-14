import React from "react";

import logo from './homelogo.png'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";


export default function Navbar() {

  return (
    <div>

      <nav class="navbar navbar-expand-lg " id="navbar" >
        <div class="container-fluid" >

          <img src={logo} id="logo" alt="" />
          <Link to = "/home"></Link>
          <a class="navbar-brand" id="nav" href="/" >Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link"  to="/SignUP" id="nav">Sign up</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login" id="nav"> Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Users" id="nav"> Users</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link" to="/aboutus" id="nav">
                  About Us
                </Link>
                
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link" to="/buysell" id="nav">
                  Buy
                </Link>
                
              </li>

              <li class="nav-item dropdown">
                <Link class="nav-link" to="/Sell" id="nav">
                  Sell
                </Link>
                
              </li>

              

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-primary" type="submit">Search</button>

            </form>
          </div>
        </div>
      </nav>




    </div>
  )
}