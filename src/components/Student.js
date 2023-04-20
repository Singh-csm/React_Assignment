import './student.css';
import React,{useState} from 'react'

function Student() {
const [fullName, setFullName] = useState("")
const [collegeName, setCollegeName] = useState("")
const [emailId, setEmailId] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [studentData, setStudentData]= useState([])

const handleSubmit =()=>{
  const student = {fullName,collegeName,emailId,phoneNumber}
  setStudentData([...studentData,student])

 
}



  return (
    <div className="App">
      <div>
      <h1>Student's Form</h1>
      <form>
       
        <input placeholder='Full Name' onChange={(e)=>{setFullName(e.target.value)}} /> <br/> <br/> 

        <input placeholder='College Name' onChange={(e)=>{setCollegeName(e.target.value)}}/> <br/> <br/>
       
        <input placeholder='Email Id'  onChange={(e)=>{setEmailId(e.target.value)}}/> <br/> <br/>

        <input placeholder='Phone Number'onChange={(e)=>{setPhoneNumber(e.target.value)}} /> <br/> <br/>
       
        
      </form>
      <button onClick={handleSubmit} >Submit</button>
      </div>

  
<div className='design'>
<table  style={{width:"70%"}}>
                <thead>
                <tr>
                  <th>Full Name</th>
                  <th>College Name</th>
                  <th>Email Id</th>
                  <th>Phone NUmber</th>

                </tr>
                </thead>

                <tbody>
                {studentData.map((data, i) => (
                <tr key={i}>
                  <td>{data.fullName}</td>
                  <td>{data.collegeName}</td>
                  <td>{data.emailId}</td>
                  <td>{data.phoneNumber}</td>

                </tr>
                 ))}
                </tbody>

              </table>
</div>
 

   
  
    </div>
  );
}

export default Student;