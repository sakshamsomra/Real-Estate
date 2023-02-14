import React from 'react';
import { CDBFooter, CDBContainer, CDBRow, CDBCol, a, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

import logo from './homelogo.png'


export default function Footer(){
    return (
      <div bgColor='light' className='text-center text-lg-start text-muted' id='footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab pulse icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab pulse icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab pulse icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab pulse icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab pulse icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab pulse icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <CDBContainer className='text-center text-md-start mt-5'>
          <CDBRow className='mt-3'>
            <CDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <CDBIcon icon="home" className="me-3" />
                Rentals
              </h6>
              <p>
              At Rentals.com it is very easy to find real estate service providers fo r your different requirements of property services
              </p>
            </CDBCol>

            <CDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </CDBCol>

            <CDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login In
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sign Up
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Support
                </a>
              </p>
            </CDBCol>

            <CDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <CDBIcon icon="home" className="me-2" />
                Panchkula, 368, sector-11
              </p>
              <p>
                <CDBIcon icon="envelope" className="me-3" />
                saksham.somra@gmail.com
              </p>
              <p>
                <CDBIcon icon="phone" className="me-3" /> + 91 9646486947
              </p>
              <p>
                <CDBIcon icon="print" className="me-3" /> + 91 8463622
              </p>
            </CDBCol>
          </CDBRow>
        </CDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://CDBootstrap.com/'>
          CDBootstrap.com
        </a>
      </div>
    </div>
    );
  };