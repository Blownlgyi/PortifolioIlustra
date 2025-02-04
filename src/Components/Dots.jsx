import { useEffect, useState } from "react"

export const Dots = () =>{
    const [trace,setTracing]  = useState([]) 
  const screen  = document.getElementById('root')
  const [clientX,SetClientX]= useState()
  const [clientY,SetClientY]= useState()
  const [drawingPossiblit,SetDrawingPossiblit]=useState(false)
  screen.onmousemove = (e)=>{
    const clientPrevX=e.clientX
    const clientPrevY=e.clientY
    SetClientX(clientPrevX)
    SetClientY(clientPrevY)
  }
  screen.ontouchmove=(e)=>{
    const clientPrevX=e.touches[0].clientX
    const clientPrevY=e.touches[0].clientY
    SetClientX(clientPrevX)
    SetClientY(clientPrevY)
    
  }
  screen.ontouchstart=()=>{

    SetDrawingPossiblit(true)
  }
  screen.ontouchend=()=>{
    SetDrawingPossiblit(false)
  }
  screen.onmousedown=()=>{

    SetDrawingPossiblit(true)
  }
  screen.onmouseup=()=>{
    SetDrawingPossiblit(false)
  }
  


  
  const trancing={
    clientTrancingX:clientX,
    clientTrancingY:clientY
  }
  useEffect(()=>{
    if(drawingPossiblit==true){
      setTracing((prev)=>[...prev, trancing])   
      
    }
    
  },[drawingPossiblit,clientX,clientY])
  
 

    return(
        trace.map((item)=>(
            <span className="dot" style={{top:item.clientTrancingY,left:item.clientTrancingX}}/>
          ))
    )
}