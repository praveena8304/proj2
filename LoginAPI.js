// import React, { useState } from 'react'
// import './Login.css'
// const LoginAPI = () => {
//     const [action, setAction] = useState("Login")


//     return (
//         <>
//             <div className='container' id='login-container'>
//                 <div className='row'>
//                     <div className='col-md-4'></div>


//                     {/* <div className=' row login-header'> */}
//                         <div className=' col-md-4 text'>{action}</div>
//                         <div className='underline'></div>
                    
//                     <div className='login-inputs'>
//                         {action === "Login" ? <div></div> : <div className='login-input'>
//                             <img src="" alt="" />
//                             <input type="text" placeholder=' Username' />
//                         </div>}
//                         <div className='login-input'>
//                             <img src="" alt="" />
//                             <input type="email" placeholder='Email Id' />
//                         </div>
//                         <div className='login-input'>
//                             <img src="" alt="" />
//                             <input type="password" placeholder='Password' />
//                         </div>
//                     </div>
//                     {action === "Sign Up" ? <div></div> : <div classname="forgot-password">forgot Password? <span id="clickhere">Click here</span></div>}
//                     <div classname="submit-container">
//                         <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
//                         <div className={action === " Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
//                     </div>
//                 </div>
//                 <div className='row'>
//                     <div className='col-md-4'></div>
//                 </div>
//                 </div>
//                 {/* </div> */}
//             </>
//             )
// }

//             export default LoginAPI