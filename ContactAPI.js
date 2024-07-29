
import React from 'react'
import './Contact.css'
export default function ContactAPI() {
    return (
        <>
            <div className='background1'>
            <div className='container1'>
           <div className='contact col-md-12'  >
                        <div className='Contact p-5'>
                            <div style={{ textAlign: 'center', maxWidth: '600px', marginLeft: '30px' }} >
                                <h2 style={{ color: "white", fontSize: "50px" }}><span style={{ color: "white", fontWeight:"500", fontFamily:"sans-serif" }}>Contact Us</span> </h2>

                                <form style={{ padding: '20px', border: '2px solid white', borderRadius: '8px', backgroundColor: "info" }} >
                                    <label style={{ marginBottom: '5px', color: "white",fontSize: "20px",fontFamily:"sans-serif"  }}>Name:</label>
                                    <input className='contact-input' type="text" name="name"
                                        placeholder='Enter your Name'


                                        style={{ width: '100%', marginBottom: '10px', border: '1px solid black',  borderColor:"black", borderRadius: '10px', boxSizing: 'border-box', }} />
                                    <label style={{ display: 'block', marginBottom: '5px', color: "white",  fontSize: "20px", fontFamily:"sans-serif" }}>Contact:</label>
                                    <input className='contact-input'
                                        type="text"
                                        name="phone no"
                                        placeholder='Enter your Number'


                                        style={{ width: '100%', marginBottom: '10px', border: '1px solid #ccc',  borderColor:"black", borderRadius: '10px', boxSizing: 'border-box', }}

                                    />
                                    <label style={{ display: 'block', marginBottom: '5px', color: "white", fontSize: "20px",fontFamily:"sans-serif"  }}>Email:</label>
                                    <input  className='contact-input'
                                        type="email"
                                        name="email"
                                        placeholder='Enter your Email'

                                        style={{ width: '100%', marginBottom: '10px', border: '1px solid black', borderColor:"black", borderRadius: '10px', boxSizing: 'border-box' }}
                                    />
                                    <label style={{ display: 'block', marginBottom: '5px',  border:"black", color: "white", fontSize: "30px" }}>Message:</label>
                                    <textarea


                                        name="message"
                                        placeholder='Enter message here'

                                        style={{ width: '100%', marginBottom: '10px',  borderColor:"black", border: '1px solid #ccc', borderRadius: '10px', boxSizing: 'border-box', padding:"10px" }}
                                    />
                                    <button style={{ backgroundColor: 'white', border: '1px solid black', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer'}} type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
