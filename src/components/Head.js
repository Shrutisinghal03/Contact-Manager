import React, { useState } from 'react';  
import "../App.css"
const d=new Date();
 var data="GOOd"; 
 const css={
 }; 
 if(1<d.getHours() && d.getHours()<13){
    data="Good morning"
    css.color="orange";
 }
 else if(13<d.getHours() && d.getHours()<16){
    data="Good afternoon"
    css.color="green";

 }
 else if(16<d.getHours() && d.getHours()<20){
    data="Good evening"
    css.color="red";
  
 }
 else {
    data="Good night"
    css.color="black";
 }
const Head = (props) => { 
  
   const dd=new Date(); 
   let ctime=dd.toLocaleTimeString(); 
   const [time,settime]=useState(ctime);
   const Update=(e)=>{ 
       ctime=dd.toLocaleTimeString(); 
    settime(ctime); 
   }; 
 setInterval(Update,1000); 
 
   return (
      <>
        <div className='ui fixed menu ' id='navv' style={{justifyContent:"space-between"}}>
            <div >
                <h3  className="heading">Contact Manager 📞  </h3>
                </div> 
                <div>
                    <h2 className='greet'> Hello {props.fullname},<span style={css}>{data}</span></h2>
                </div>
                <div>
                <p>{d.toLocaleDateString()}</p>
                <p>{time}</p>
                </div>
 </div>  
 </>
    );
};

export default Head;