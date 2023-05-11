import React from 'react';
import {Link} from 'react-router-dom'

const Chocolate = ({chocolate, chocolates, setChocolates}) => {
    // console.log(chocolate);

    const handleDelete = id => {
        console.log(id);
        if (window.confirm("Are you sure to delete?")) {
            // window.open("exit.html", "Thanks for Visiting!");
           
            fetch(`http://localhost:5000/chocolate/${chocolate._id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    alert('Deleted Successfully')
                    const remaining = chocolates.filter(choco => choco._id !== id);
                    setChocolates(remaining)
                }
            })
          }
          
    }
    return (
        <div className='d-flex flex-column border border-success p-4 mb-3'>
           <div>
           <h2>Name: {chocolate.name}</h2>
            <p>Country: {chocolate.country}</p>
            <p>Category: {chocolate.category}</p>
            <p>_id: {chocolate._id}</p>
           </div>
           <div className='d-flex justify-content-around'>
            <button>View</button>
            <Link to ={`updateChocolate/${chocolate._id}`}><button>Edit</button></Link>
            <button onClick={()=> handleDelete(chocolate._id)}>Delete</button>
           </div>

        </div>
    );
};

export default Chocolate;