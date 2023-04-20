import React, { useState } from "react"
import "./multipleinput.css"

const MultipleInputs = () => {

        const [userRegistration, setUserRegistration] = useState({
            username :"",
            email:"",
            phone:"",
            password:""
        })

        const  [records,setRecords] = useState([])

    const handleInput= (e)=>{
        const name = e.target.name
        const value = e.target.value
        console.log(name,value)

        setUserRegistration({...userRegistration, [name]: value})

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newRecord ={...userRegistration, Id: new Date().getTime().toString() }
        console.log(records)
        setRecords([...records,newRecord])
        console.log(records)
        setUserRegistration({username:"",email:"",password:"",phone:""})

    }




    return (
        <>
            <form onSubmit ={handleSubmit}>

            <div className="design">
            <div>
                    <lable htmlFor="username"> fullname</lable>
                    <input type="text" name="username" value= {userRegistration.username} onChange={handleInput} id="username"></input>
                </div>

                <div>
                    <lable htmlFor="email"> email</lable>
                    <input type="text" name="email" value= {userRegistration.email} onChange={handleInput} id="email"></input>
                </div>

                <div>
                    <lable htmlFor="phone"> phone</lable>
                    <input type="text" name="phone" value= {userRegistration.phone} onChange={handleInput} id="phone"></input>
                </div>

                <div>
                    <lable htmlFor="password"> password</lable>
                    <input type="text" name="password" value={userRegistration.password} onChange={handleInput} id="password"></input>
                </div>
                <button type="submit"> submit</button>
            </div>


            </form>



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
                {`studentData`.map((data, i) => (
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
 




        </>
    )
}


export default MultipleInputs