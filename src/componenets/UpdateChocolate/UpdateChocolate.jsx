import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateChocolate = () => {
    const updateChocolate = useLoaderData();
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const newChocolate = {name,country, category};
        console.log(newChocolate);
        // send to the server
        fetch(`http://localhost:5000/chocolate/${updateChocolate._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert("UPDATED TO DATABASE SUCCESSFULLY")
            }
        })

    }
     
    return (
        <div>
            <h2>Update Chocolate...</h2>
            <form onSubmit={handleUpdate}>
                <input style={{"padding": "10px"}} type="text" name="name" id="" defaultValue={updateChocolate.name} placeholder='Chocolate Name' />  <br /> <br />
                <input  style={{"padding": "10px"}} type="text" name="country" defaultValue={updateChocolate.country} placeholder='Country' id="" /> <br /> <br />
                <input  style={{"padding": "10px"}} type="text" name="category" defaultValue={updateChocolate.category} placeholder='Category' id="" /> <br /> <br />
                <input  style={{"padding": "10px", width:"100px"}} type="submit" value="Update" />
            
            </form>

        </div>
    );
};

export default UpdateChocolate;