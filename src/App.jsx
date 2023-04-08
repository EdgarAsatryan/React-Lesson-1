import { useState } from 'react'
import './App.css'
import {Modal} from './modal'
export default function changeColor() {
  const [color, setColor] = useState("red")
  return (
    <div className='all'>
    <div style={{width:"200px",height:"200px",backgroundColor:`${color}`}} onClick={() => setColor(()=> `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`)}>
    </div>
    <Counter />
    </div>
    )
}


export function Counter(){
  let [count,setCount] = useState(0)
  return(
  <div className='CounterAll'>
  <div>The count is {count}</div>
  <button onClick={()=>setCount((count)=>count+1)}>Change Count</button>
  {count > 9 && <Modal />}
  </div>
  )
}

