import React, { useEffect, useState } from 'react'
 
 
export default function App() {
  const[state,setstate]=useState([])
  useEffect(()=>{
    fetch('https://api.artic.edu/api/v1/artworks')
    .then(res=>res.json())
    .then(json=>setstate(json.data))
 
  })
  return (
    <div>
      {state.map((x)=><>
      <h1>Id
      <li>{x.id}</li><br/>
      </h1>
      <h1>Title
      <li>{x.title}</li><br/>
      </h1>
      <h1>MODEL
      <li>{x.api_model}</li><br/>
      </h1>
     
      </>)}
    </div>
  )
}
