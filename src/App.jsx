import './App.css'
import {Link, useLoaderData} from 'react-router-dom'
import Chocolate from './componenets/Chocolate/Chocolate';
import { useState } from 'react';
function App() {

  const loadedChocolates = useLoaderData()
  const [chocolates, setChocolates] = useState(loadedChocolates)
 
  return (
    <>
       <h2>App.jsx</h2>
       <h2>New Chocolates : {chocolates.length}</h2>
       <Link to="/newChocolate" ><button className='m-3'>New Chocolate</button></Link>
       
        <div className="">
        {
        chocolates.map(chocolate =>
         <Chocolate
         key= {chocolate._id}
         chocolate = {chocolate}
         chocolates = {chocolates}
         setChocolates = {setChocolates}
         >

        </Chocolate> )
       }
        </div>
      
    </>
  )
}

export default App
