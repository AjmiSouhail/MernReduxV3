import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux'; 
import { dellEmp, getEmp } from '../action/action';
function Home () {
  const { employes, loading, error } = useSelector((state) => state.employes);


  const dispatch = useDispatch(); 
  useEffect( ()=>{
     dispatch(getEmp())  
  },[dispatch])
  const  deletEmp = async(id)=> {
  await  dispatch(dellEmp(id))
  await  dispatch(getEmp())
  }
 
  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
 return (
<div>
  <h1 className=" bg-white text-center text-primary py-5 " >Liste  employes</h1>
  <div className='container'>

  <a href="/ajout"><button className="btn btn-sm  btn-success" ><i className="fas fa-edit"></i> Ajouter</button></a>

  <table className='container'>
    <tr className='text-primary '>
      <th className="pb-2" >Num</th>
      <th className="pb-2">First Name</th>
      <th className="pb-2">Last Name</th>
      <th className="pb-2">Email</th>
      <th className="pb-2">Contact Number</th>
      <th className="pb-2">dob</th>
      <th className="pb-2">Action</th>
    </tr>      { employes.length && employes.map((item,index)=>

<tr key={item._id} >
    <td className="pb-2">
{item.id} </td>
    <td className="pb-2">{item.firstName}</td>
    <td className="pb-2">{item.lastName}</td>
    <td className="pb-2">{item.email}</td>
    <td className="pb-2">{item.contactNumber}</td>
    <td className="pb-2">{item.dob}</td>
    <td className="pb-2">
    <Link to={"/edit/"+item._id}  className="btn btn-sm btn-warning d-inline-block" ><i className="fas fa-edit"></i> Modifier</Link>
<button className="btn btn-sm btn-danger d-inline-block"  onClick={()=>deletEmp(item._id)} ><i className="fas fa-trash-alt"></i> Supprimer</button>
  </td>
    </tr> 
    )}
    </table>
    </div></div>
  )}
  export default Home;