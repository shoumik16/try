import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then((response) => {
        
        setdata(response.data)})
      .catch((error)=>{
        console.log(error)
      })
  });
  return (
    <>
      <h1>Data of {data.length} person:</h1>
      {
     data.map((x,y) => (
       <div>
           <p>{x.name}</p>
           <p>{x.age}</p>
           </div>
        
       ))
    }
    </>
  )
}

export default App
