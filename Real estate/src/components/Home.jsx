import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { CDBFooter, CDBContainer, CDBRow, CDBCol, a, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import axios from "axios";

import Footer from './Footer'

import penthouse from './penthouse.jpg'

import plots from './plots.jpg'

import farmhouse from './farmhouse.jpg'

import houses from './houses.jpg'

import flats from './flats.jpeg'

import show from './showrooms.jpg'

import office from './office.jpg'

import estate from './estate.jpeg'
import builder from './builder.png'
import rent from './rent.png'
import sale from './sale.png'
import agent from './agent.png'
import project from './project.png'



export default function Home() {

    return (

        <>

            <div id="place" >
                <p class="txton">You will be moving in the right direction with Rentals</p>

                <img src={estate} class="estate" alt="..." />




            </div>




            <br />
            <br />

            <div id="boxes">

                <h1>Categories</h1>

                <div class="card" id="card">
                    <img src={flats} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Flats</h5>
                        <p class="card-text"> </p>
                        <Link to="/Flats" class="btn btn-primary">View</Link>
                    </div>
                </div>

                <div class="card" id="card">
                    <img src={houses} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Houses</h5>
                        <p class="card-text"> </p>
                        <Link to="/Houses" class="btn btn-primary">View</Link>
                    </div>
                </div>

                <div class="card" id="card">
                    <img src={farmhouse} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Farm Houses</h5>
                        <p class="card-text"> </p>
                        <Link to="/Farm" class="btn btn-primary">View</Link>
                    </div>
                </div>

                <div class="card" id="card">
                    <img src={penthouse} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pent Houses</h5>
                        <p class="card-text"> </p>
                        <Link to="/Pent" class="btn btn-primary">View</Link>
                    </div>
                </div>

                <div class="card" id="card">
                    <img src={office} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Office Rooms</h5>
                        <p class="card-text"> </p>
                        <Link to="/Office" class="btn btn-primary">View</Link>
                    </div>
                </div>
                <div class="card" id="card">
                    <img src={show} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Show Rooms</h5>
                        <p class="card-text"> </p>
                        <Link to="/Show" class="btn btn-primary">View</Link>
                    </div>
                </div>


            </div>

            



            <div id="info" >

                <div id="inner" >
                
                Property Dealers
                <div>
                <img src={agent} alt="" height={40} />
                </div>

                </div>
                <div id="inner" >
                    Property for Sale
                    <div>
                <img src={sale} alt="" height={40} />
                </div>
                    
                </div>
                <div id="inner" >
                    Property for Rent
                    <div>
                <img src={rent} alt="" height={40} />
                </div>
                    
                    
                </div>
                <div id="inner" >
                    Builders and Developers
                    <div>
                <img src={builder} alt="" height={40} />
                </div>
                    
                </div>
                <div id="inner" >
                    Residential Projects
                    <div>
                <img src={project} alt="" height={40} />
                </div>
                    
                    
                </div>

            </div>


          

           


            

            <br />
            <br />
            <br />




            <Footer />


           




        </>







    )



}