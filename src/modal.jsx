import { useState } from 'react'
import React from 'react'

export function Modal(){
    return (
    <div className='module'>
    <span>You reached 10</span>
    <button onClick={()=>setCount((count)=>0)}>Click</button>
    </div>)
  }