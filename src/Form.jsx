import React from 'react'

export default (props) => {
    return (
           <div className='form-container'>

            <input 
            type="text" 
            id="firstname" 
            placeholder='Enter FirstName' 
            onChange={props.handleChange}  
            value={props.form.firstname} 
            />

            <input 
            type="text" 
            id="lastname" 
            placeholder='Enter LastName' 
            onChange={props.handleChange}  
            value={props.form.lastname} 
            />

            <input 
            type="text" 
            id="country" 
            placeholder='Enter Your Biography' 
            onChange={props.handleChange} 
            value={props.form.country}
            />
            
            <button onClick={props.handleSubmit}>submit</button>   
           </div>
)
    }
    

