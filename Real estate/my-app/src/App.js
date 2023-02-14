import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SignUP from './components/SignUP';
import Users from './components/users';
import axios from 'axios';
import Login from './components/Login';

import Home from './components/Home';

import About from './components/About';

import React, { useEffect, useState } from 'react';

import Buysell from './components/Buysell';

import Sell from './components/Sell';

import Flats from './components/Flats';

import Farm from './components/categories/Farm';
import Houses from './components/categories/Houses';
import Office from './components/categories/Office';
import Pent from './components/categories/Pent';
import Show from './components/categories/Show';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  NavLink
} from 'react-router-dom';


function App() {



  return (
    <>

      <Navbar />
      
      


      <Routes>

        <Route path="/" element={<Home />} />
       
        <Route path="/SignUP" element={<SignUP />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/buysell" element={<Buysell />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Flats" element={<Flats />} />
        <Route path="/Farm" element={<Farm />} />
        <Route path="/Houses" element={<Houses />} />
        <Route path="/Office" element={<Office />} />
        <Route path="/Pent" element={<Pent />} />
        <Route path="/Show" element={<Show />} />

        
      </Routes>


      

    </>
  );
}

export default App;
