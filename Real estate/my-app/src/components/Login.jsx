import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";


export default function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");



    const loginS = () => {
        axios.post("http://localhost:3000/login", {
            name: name,
            password: password,
        }).then((response) => {
            console.log(response);
        })
    }






    return (


        <>

            <form id="login" class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label" id="text">Name</label>
                    <input type="text" class="form-control" placeholder="Name"  name="name" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                     
                    <label for="validationCustom01" class="form-label" id="text">Password</label>
                    <input type="password" class="form-control" placeholder="Password"  name="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} /> 
                </div>
                



                <div >
                    <button class="btn btn-primary" onClick={loginS} > Login </button>

                </div>
            </form>




        </>



    )



}