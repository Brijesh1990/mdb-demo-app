import React from 'react'
import { MDBContainer,MDBRow,MDBBtn } from 'mdb-react-ui-kit'
import NavbarApp from './NavbarApp.jsx'
export default function App() {
  return (
    <>
    <NavbarApp />
    <MDBContainer fluid className='p-5 content bg-dark text-white p-5 mt-5 shadow mx-auto'>
    <MDBRow>
      <h1>Welcome to MDB React UI Kit</h1>
      <p>This is a simple example of using MDB React UI Kit components.</p>
      <MDBBtn color='primary' className='btn btn-md w-25 mx-auto mt-5'>Primary</MDBBtn>
    </MDBRow>
    </MDBContainer>

     <MDBContainer fluid className='p-5 content bg-dark text-white p-5 mt-5 shadow mx-auto'>
    <MDBRow>
      <h1>Welcome to MDB React UI Kit</h1>
      <p>This is a simple example of using MDB React UI Kit components.</p>
      <MDBBtn color='primary' className='btn btn-md w-25 mx-auto mt-5'>Primary</MDBBtn>
    </MDBRow>
    </MDBContainer>


     <MDBContainer fluid className='p-5 content bg-dark text-white p-5 mt-5 shadow mx-auto'>
    <MDBRow>
      <h1>Welcome to MDB React UI Kit</h1>
      <p>This is a simple example of using MDB React UI Kit components.</p>
      <MDBBtn color='primary' className='btn btn-md w-25 mx-auto mt-5'>Primary</MDBBtn>
    </MDBRow>
    </MDBContainer>
    </>
  )
}
