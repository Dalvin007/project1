import { Button, Typography, iconButtonClasses } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [Count,setCount] = useState(0)
   
    const incBtn =() =>{
        setCount(Count+1)
    }
    const decBtn =() =>{
        if(Count>0){
     setCount(Count-1)
    }
}
  return (
    <div style={{paddingTop:"80px"}}>
    
    <Typography variant='h4'>WELCOME :{Count}</Typography>
    <Button variant='contained' color='success' onClick={incBtn}>+</Button>
    <Button variant='contained' color='error' onClick={decBtn}>-</Button>
    
    </div>
  )
}

export default Counter