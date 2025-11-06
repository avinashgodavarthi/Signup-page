// import React, { useState } from 'react'
// import {Link, useNavigate} from "react-router-dom"
// import { ToastContainer,toast } from 'react-toastify'




// function Signup(){
//     var navigate = useNavigate()
//     var[name,setName] = useState("")
//     var[email,setEmail] = useState("")
//     var[number,setNumber] = useState("")
//     var[password,setPassword] = useState("")

//     function handleName(e){
//         setName(e.target.value)
//     }
//     console.log(setName);

//     function handleEmail(e){
//         setEmail(e.target.value)
//     }
//     console.log(setEmail);

//     function handleNumber(e){
//         setNumber(e.target.value)
//     }
//     console.log(setNumber)
    
//     function handlePassword(e){
//         setPassword(e.target.value)
//     }
//     console.log(setPassword);
    


//     async function handleSignup() {
//         try{
//             var formData ={
//                 myname : name,
//                 myemail : email,
//                 mynumber : number,
//                 mypassword : password
//             }
//             var response = await fetch("https://69088e0c2d902d0651b0d012.mockapi.io/users",{
//                 method : "POST",
//                 headers : {
//                     "content-Type" : "application/json"
//                 },
//                 body: JSON.stringify(formData)

//                 })
//                 if(response.ok){
//                    toast.success('Account created')
//                    setTimeout (()=>{navigate('/login')

//                    },1500)
                    
//                     setName("")
//                     setEmail("")
//                     setNumber("")
//                     setPassword("")
//                 }else{
//                     toast.error("failed to create account")
//                 }
//         }catch(error){
//             console.log("error",error);
//              toast.error("Something went wrong!");
//         }

//     }
            
       
//     return(
//         <div>
//             <ToastContainer position="top-right" />
//             <h1>Create Account</h1>
//             <div>

//                 <label htmlFor="">Username : </label>
//                 <input placeholder='Username' value={name} onChange={handleName}  type="text" />
//                 <label htmlFor="">Email : </label>
//                 <input placeholder='Email' value={email}  onChange={handleEmail} type="text" />
//                 <label htmlFor="">Number : </label>
//                 <input placeholder='Number' value={number} onChange={handleNumber}  type="text" />
//                 <label htmlFor="">Password : </label>
//                 <input placeholder='Password' value={password} onChange={handlePassword} type="text" />
//                 <button onClick={handleSignup}>Signup</button>
//                 <br />
//                  <Link to={"/login"}>Login if Account exists</Link>

                

//             </div>


//         </div>
//     )
// }
// export default Signup




import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Signup.css'

function Signup() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignup() {
    try {
      const formData = {
        myname: name,
        myemail: email,
        mynumber: number,
        mypassword: password,
      }

      const response = await fetch('https://69088e0c2d902d0651b0d012.mockapi.io/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('✅ Account created successfully!')
        setTimeout(() => {
          navigate('/login')
        }, 1500)

        setName('')
        setEmail('')
        setNumber('')
        setPassword('')
      } else {
        toast.error('❌ Failed to create account')
      }
    } catch (error) {
      console.log('Error:', error)
      toast.error('⚠️ Something went wrong!')
    }
  }

  return (
    <div className="signup-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="signup-card">
        <h1>Create Your Account</h1>
       

        <div className="signup-form">
          <label>Username</label>
          <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} type="text" />

          <label>Email</label>
          <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

          <label>Phone Number</label>
          <input placeholder="Enter your number" value={number} onChange={(e) => setNumber(e.target.value)} type="text" />

          <label>Password</label>
          <input placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

          <button onClick={handleSignup} className="signup-btn">Sign Up</button>
        </div>

        <p className="login-text">
          Already have an account? <Link to="/login" className="login-link">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
