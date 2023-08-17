import React,{useState} from 'react'; 
import Head from './Head'; 
import Trash from './Trash'; 
import Dataform from './Dataform';

const Details = () => {   
  const [obj,setobj]=useState([]); 
  const [fname,setfname]=useState(""); 
const [data,setdata]=useState({ 
  name:"",
  email:"",
  phone:""
});  
  const Updatedata=(e)=>{
const name=e.target.name; 
const val=e.target.value; 
setdata({
  ...data,
[name]:val});
  }  
  const deleted=(id)=>{
    setobj((old)=>{
      return old.filter((ele,index)=>{
return index!==id;
      })
    })
  }

  const onsub=(e)=>{ 
   e.preventDefault(); 
   setobj([...obj, data]); 
    setfname(data.name);  
  }
    return (  
      <div className='ui container'>
       <Head fullname={fname}/>
       <Dataform name={data.name} email={data.email} phone={data.phone}
       Updatedata={Updatedata} onsub={onsub}> </Dataform> 
       {
        obj.map((data,index)=>{ 
          return(
          <Trash  
          key={index}
          id={index}
          detail={data}
           onSelect={deleted}/> )
        })
       }
       
 </div>
    );
};

export default Details; 