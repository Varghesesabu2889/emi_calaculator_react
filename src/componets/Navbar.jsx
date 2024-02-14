import React from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';
  
function Navbar() {
  return (
    <div>
        <MDBContainer>
        <MDBNavbar expand='lg' light bgColor='primary'>
          <MDBContainer fluid>
        
            <MDBNavbarBrand href='#'><b style={{color:"white"}}>Home Loan EMI Calculator  <i class="fa-solid fa-house fa-beat-fade fa-lg"></i></b></MDBNavbarBrand>
            <MDBNavbarBrand href='#'><b style={{color:"white"}}>Car Loan EMI Calculator <i class="fa-solid fa-car fa-beat-fade"></i> </b></MDBNavbarBrand> 
            <MDBNavbarBrand href='#'><b style={{color:"white"}}>Personal Loan EMI Calculator  <i class="fa-solid fa-person fa-beat-fade"></i></b></MDBNavbarBrand>
            
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </div>
  )
}

export default Navbar