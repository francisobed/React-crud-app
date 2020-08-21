import React from 'react'

export default (props)=> {
        return (
            <div className='names-placeholder'>
            <div className='table-Header'>
            <div >FirstName:</div>
            <div >LastName:</div>
            <div >Country:</div>
            <div >Action:</div>
            </div>
            
            {
            props.records.map((record, ind) => 
            
            <div className='table-Header'>
            <div>{record.firstname}</div>
            <div>{record.lastname}</div>
            <div>{record.country}</div>
            <div><button className='del-btn' onClick={() => props.handleDelete(ind)}>Delete</button></div>
            </div>
            )} 
            </div>
            
        )
    }