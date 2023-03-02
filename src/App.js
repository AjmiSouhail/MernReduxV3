import React, { useEffect } from 'react'
import {BrowserRouter , Route ,Routes} from "react-router-dom"
import Home from "./component/Home"
import CreatePage from './component/CreatePage'
import Nav from "./component/Nav"
import Edit from "./component/Edit"
import { useDispatch } from 'react-redux'
import { getApi } from './action/action'
function App() {
  const dispatch = useDispatch(); 
  useEffect( ()=>{
     dispatch(getApi())  
  },[dispatch])
return(
  <div className='App'>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/employe" exact element={<Home/>}></Route>
    <Route path="/ajout"  element={<CreatePage/>} />
    <Route path="/edit/:id"  element={<Edit/>} />
    </Routes>
</BrowserRouter></div>
)
}
  export default  App;