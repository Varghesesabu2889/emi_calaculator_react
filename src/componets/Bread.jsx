import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

function Bread() {
  return (
    <div>
        <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a href='/'>Home </a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href="/">Finance Tool</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Loan EMI Calculator</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </div>
  )
}

export default Bread