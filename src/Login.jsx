// import React, { useState ,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import {ToastContainer, toast} from 'react-toastify'



// function Login(){
//     var nav = useNavigate()
//     var[email,setEmail] =useState("")
//     var[password,setPassword] =useState("") 
//     var[data,setData] = useState("")
    
//     function handleEmail(e){
//         setEmail(e.target.value)
//     }

//     function handlePassword(e){
//         setPassword(e.target.value)
//     }

//      async function getAllData(){
//         var result = await fetch("https://69088e0c2d902d0651b0d012.mockapi.io/users")
//         var response = await result.json()
//         setData(response)
//     }
//     useEffect(()=>{
//         getAllData()
//     },[])

//     function handleLogin(){
//         var userExists = data.find(item=>item.myemail == email && item.mypassword == password)
//         if(userExists){
//             toast.success("login sucess")
//             setTimeout(() => {nav("/home")
                
//             }, 1500);
            
//         }else{
//             toast.error("failed to login")
//         }
//     }




//     return(
//         <div>
//             <ToastContainer position="top-right"/>
//             <ToastContainer position="top-right"/>
//             <h1>Login Page</h1>

//             <div>
//                 <label htmlFor="">Enter Email</label>
//                 <input value={email} onChange={handleEmail} placeholder='Email' type="text" />
//                 <label htmlFor=""> Enter Password</label>
//                 <input value={password} onChange={handlePassword} placeholder='Password' type="text" />
//                 <button onClick={handleLogin}>Login</button>

//             </div>
//         </div>
//     )
// }
// export default Login



import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Login.css'

function Login() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState([])

  async function getAllData() {
    const result = await fetch('https://69088e0c2d902d0651b0d012.mockapi.io/users')
    const response = await result.json()
    setData(response)
  }

  useEffect(() => {
    getAllData()
  }, [])

  function handleLogin() {
    const userExists = data.find(
      (item) => item.myemail === email && item.mypassword === password
    )

    if (userExists) {
      toast.success('✅ Login successful!')
      setTimeout(() => {
        nav('/home')
      }, 1500)
    } else {
      toast.error('❌ Invalid credentials!')
    }
  }

  return (
    <div className="login-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="login-card">
        <h1>Welcome Back</h1>
        <h1>Login</h1>


        <div className="login-form">
          <label>Email</label>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <label>Password</label>
          <input
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button onClick={handleLogin} className="login-btn">Login</button>
        </div>

        <p className="signup-text">
          Don’t have an account?{' '}
          <span className="signup-link" onClick={() => nav('/signup')}>
            Sign up here
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
