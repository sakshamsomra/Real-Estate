

import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from "react-router-dom";






export default function Sell() {

  const [location, setLocation] = useState("")
  const [mark, setMark] = useState("")
  const [contact, setContact] = useState("")
  const [category, setCategory] = useState("")



  const submitForm = () => {

    axios.post("http://localhost:3000/api/addloc", {
      Location: location,
      Category: category,
      LandMark: mark,
      Contact: contact,

    }).then(() => {
      alert('success for insert')
    })

  }



  return (
    <>

      <br />

      <div>

        <form id="form" class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label" id="text">Location</label>
            <input type="text" class="form-control" id="validationCustom01" name="location" onChange={(e) => {
              setLocation(e.target.value)
            }} />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <select class="form-select" id='select' aria-label="Default select example" onChange={(e) => {
            setCategory(e.target.value) 
          }} >
                   <option selected>Open this select menu</option>
                    <option value="Pent">Pent</option>
                   <option value="Farm">Farm</option>
                  <option value="House">House</option>
                  <option value="Showroom">Showroom</option>
                  <option value="Office">Office</option>
                  <option value="Flats">Flat</option>
          </select>


        {/* <div class="col-md-4">
          <label for="validationCustom02" class="form-label" id="text">Category</label>
          <input type="text" class="form-control" id="validationCustom02" name="category" onChange={(e) => {
            setCategory(e.target.value)
          }} />
        </div> */}
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label" id="text">Land Mark</label>
          <input type="text" class="form-control" id="validationCustom02" name="mark" onChange={(e) => {
            setMark(e.target.value)
          }} />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label" id="text">Contact Number</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">+91</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="contact" onChange={(e) => {
              setContact(e.target.value)
            }} />

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
          <button class="btn btn-primary" type="submit" onClick={submitForm} >Upload Estate</button>

        </div>
      </form>

    </div>

        </>
    )

}