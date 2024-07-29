import React, { useEffect, useRef, useState } from "react";
 import App from "./App.js";
 import "./Siginup.css"
function SignupAPI(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }
 
   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div className="login">
            <form >
        <div>
            {showHome?<App/>:
            (show? 
                <div className="container3 ">
                    <div className="login1">
                        <div className="card ">
                            <h1>Login</h1>
                        <h1 className="loginhead">Hello {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email}  className="inputlog"/>
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} className="inputlog" />
                        </div>
                        <button className="logbutton" onClick={handleSignIn}>Login</button>
                        </div>
                </div>
                </div>
               
               
           :
           
                <div className="container3">
                    <div className="form1">
                    <div className="card">
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name}className="inputlog" />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email}className="inputlog "/>
                        </div>
                        <div className="input_space">
                            <input placeholder="Password"  type='password' ref={password} className="inputlog" />
                        </div>
                        <button className="logbutton" onClick={handleClick}>Sign Up</button>
                </div>
                </div>
                </div>
            ) }
        </div>
        </form>
        </div>
       
    );
}
export default SignupAPI;