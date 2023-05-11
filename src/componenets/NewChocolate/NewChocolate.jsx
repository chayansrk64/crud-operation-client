import React from 'react';

const NewChocolate = () => {

    const handleChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const newChocolate = {name,country, category};
        console.log(newChocolate);
        // send to the server
        fetch(`http://localhost:5000/chocolate`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId > 0){
                alert("ADDED TO DATABASE SUCCESSFULLY")
            }
        })

    }
    return (
        <div>
            <h2>New chocolate</h2>
            <form onSubmit={handleChocolate}>
                <input style={{"padding": "10px"}} type="text" name="name" id="" placeholder='Chocolate Name' />  <br /> <br />
                <input  style={{"padding": "10px"}} type="text" name="country" placeholder='Country' id="" /> <br /> <br />
                <input  style={{"padding": "10px"}} type="text" name="category" placeholder='Category' id="" /> <br /> <br />
                <input  style={{"padding": "10px", width:"100px"}} type="submit" value="Save" />
            
            </form>
        </div>
    );
};

export default NewChocolate;