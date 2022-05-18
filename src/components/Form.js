import React , { useState } from 'react';
import "./form.css"

export default function Form() {
    
    const [data, setData]= useState([0]);
    const [record, setRecord]= useState([])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}))
      };
       
    const  handleSubmit = (event)=>{
        event.preventDefault();
        const newRecord={...data}
        setRecord([...record,newRecord]);
        setData({ Name: "" , Department:"",Rating:""});
        event.preventDefault();
    };
  return (
    <>
    <form  onSubmit={handleSubmit}>
    <br/>
    <div><h1> EMPLOYEE FEEDBACK FORM </h1></div>
    <br/> <br/>
    <label> <b>Name  : </b>
       <input type="text" placeholder='Enter your name' name="Name" value={data.name} onChange={handleChange} />
       </label><br/> <br/>
    <label><b>Department  : </b>
        <input type="text" placeholder='Enter department' name="Department" value={data.dept} onChange={handleChange}  />
        </label><br/> <br/>
    <label> <b>Rating  : </b>
        <input type="number" placeholder='Rate here.' name="Rating" value={data.rat} onChange={handleChange} />
        </label><br/> <br/> <br/>
    <button > <b>Submit</b> </button>
        
    </form>
    <br/>
     <div className='result'>
         <br/>
         {
             record.map((currElem)=>{
                 return (
                    <div className='data'>
                         <b> Name : </b><p> {currElem.Name} </p> 
                         <b>Department :</b><p>{currElem.Department} </p>
                         <b>Rating : </b><p>{currElem.Rating}</p>
                    </div>
                 )
             })
         }
        <br/>
     </div>
    </>
  );
}


