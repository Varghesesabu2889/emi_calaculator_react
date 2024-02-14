import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Emi() {
  const[amount,setAmount]=useState(0);

  const [tenure, setTenure] = useState(0);
  const[intrest,setIntrest]=useState(0)
  
  const[result,setResult]=useState(0);

  const calculate = () => {
    if (amount === "" || tenure === "" || intrest === "") {
      alert("Please enter all the details")
    } else if (amount === 0 || tenure === 0 || intrest === 0) {
      alert("Please enter a valid digit for emi calculation")
    } else {
      const monthlyInterest = intrest / 1200
      const noofPayment = tenure * 12

      const emi = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -noofPayment))
      setResult(emi.toFixed(2))
    }
  }


 




  












  return (
   
    <div className='cont'>
      <div>
    <center>
    <input type="text"  value={amount || ""} onChange={(e)=>setAmount(e.target.value)}   className='f1' placeholder= ' Enter Your Loan Amount' style={{background:"white"}}/> <br /><br />
     <input type="text"  value={tenure || ""} onChange={(e)=>setTenure(e.target.value)}   className='f1' placeholder='Tenure' style={{background:"white"}}/> <br /><br />
     <input type="text"  value={intrest || ""} onChange={(e)=>setIntrest(e.target.value)}   className='f1' placeholder='Intrest rate % ' style={{background:"white"}}/> <br /><br />
    <MDBBtn  rounded color='outline-success' onClick={calculate}>
        Calculate
      </MDBBtn>

     </center>
     </div>
     <div> <center> <br />
     <h2 className='res' style={{color:"black"}}> Your Monthly EMI is :{result} </h2>
   </center>
    
   </div>


  </div>

    
  )
}

export default Emi