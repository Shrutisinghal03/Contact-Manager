import React from 'react';  
import "../App.css"; 
const Dataform=(props)=>{
return(
<>
<div className='ui main' style={{marginTop:"4rem"}}>
           <h2> Add Contact</h2> 
           <form className='ui form' onSubmit={props.onsub}>
           <div className='field'>
              <label>Name</label>
              <input type="text" placeholder='Enter your name' name='name'  value={props.name} onChange={props.Updatedata}></input>
                </div>
                <div className='field'>
              <label>Email</label>
              <input type="text" placeholder='Enter your email' name='email'  autoComplete="on" value={props.email} onChange={props.Updatedata}></input>
                </div> 
                <div className='field'>
              <label>Contact Number</label>
              <input type="Number" placeholder='Enter your Phone no.' name='phone'  autoComplete="on" value={props.phone} onChange={props.Updatedata}></input>
                </div> 
                <button  type="submit"  className=' ui button blue'>
                    Add
                </button>
           </form>      
 </div>  
</>
)

};
export default Dataform; 