import React , {useState}from 'react'; 
import "../App.css" ;
import user from "../imags/download.png"

const Trash = (props) => { 
    const d=new Date(); 
    const [show,setshow]=useState(false);
return (<> 
     <div className='ui celled '> 
     <div className='item' style={{display:"flex" }}> 
     <table>
     <tr>
     <th>Photo</th>
    <th>Name</th>
    <th>Email</th>
    <th>Created</th> 
    <th>Contact Number</th>
 </tr>
<tr>
<td><img className='ui avatar image' src={user} alt="user-img"/></td>
<td>    <div className='header' > {props.detail.name}</div></td>
<td> <div>{props.detail.email} </div></td> 
<td> {d.toLocaleDateString()}</td>
<td> {props.detail.phone}</td>
<td>   <div><i style={{color:"red" , marginTop:"0rem",marginLeft:"15rem"}} className='trash alternate outline icon' onClick={
                  ()=>{props.onSelect(props.id)}}> </i></div>  </td>
</tr>
</table>
     </div>    
     </div>     
   </>
    );
} 
export default Trash;