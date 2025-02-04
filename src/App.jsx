
import { Outlet } from 'react-router'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [manager,setManager] = useState();
  useEffect(()=>{
    
  },[manager])
  return (
    <>
      <Outlet context={setManager}/>
    </>
  )
}

export default App
