import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";






export default function Form() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")


  const submitForm = () => {

    axios.post("http://localhost:3000/api/items", {
      name: name,
      age: age,
      email: email,
      phone: phone,
      password: password
    }).then(()=> {
      alert('success for insert')
    })

  }



  return (

    <div>

      <form id="form" class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Name</label>
          <input type="text" class="form-control" id="validationCustom01" name="name" onChange={(e) => {
            setName(e.target.value)
          }} />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label" id="text">Age</label>
          <input type="text" class="form-control" id="validationCustom02" name="age" onChange={(e) => {
            setAge(e.target.value)
          }} />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label" id="text">Email</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="email" onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>


        <div class="col-md-3">
          <label for="validationCustom05" class="form-label" id="text">Phone</label>
          <input type="text" class="form-control" id="validationCustom05" name="phone" onChange={(e) => {
            setPhone(e.target.value)
          }} />
          <div class="invalid-feedback">
            Please provide a valid phone number.
          </div>
        </div>

        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Choose a Password</label>
          <input type="text" class="form-control" id="validationCustom01" name="password" onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <div class="valid-feedback">

          </div>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>



        <div class="col-12">
          <Link to="/users"><button class="btn btn-primary" type="submit" onClick={submitForm} >Submit form</button></Link>

        </div>
      </form>



    </div>
  )
}

