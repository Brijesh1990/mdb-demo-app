import React from 'react'
import { MDBNavbar,MDBNavbarBrand } from 'mdb-react-ui-kit'
export default function NavbarApp() {
  return (
    
      <MDBNavbar className='bg-dark text-white p-3  navbar-expand-md fixed-top'>
        <MDBNavbarBrand href='#' className='text-decoration-none text-white fs-3 ms-2'>My Navbar</MDBNavbarBrand>
        
         <button className='navbar-toggler text-white bg-dark text-warning' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' >
              <span className='navbar-toggler-icon text-warning'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
         <ul className='navbar-links'>
           <li><a href='#'>Home</a></li>
           <li><a href='#'>About</a></li>
           <li><a href='#'>Contact</a></li>
         </ul>
         </div>
      </MDBNavbar>
    
  )
}
