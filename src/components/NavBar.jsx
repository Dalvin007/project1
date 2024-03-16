import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
    <AppBar>
     <Toolbar>
         <Typography>MyApp</Typography>&nbsp;
         <Button variant='contained' color='success'>
         <Link to={'/'} style={{textDecoration:"none",color:"white"}}>ViewData</Link></Button>&nbsp;      
         <Button variant='contained' color='error'>
         <Link to={'/add'} style={{textDecoration:"none",color:"white"}}>AddData</Link></Button>&nbsp;      
         <Button variant='contained' color='error'>
         <Link to={'/Edit'} style={{textDecoration:"none",color:"white"}}>EditData</Link></Button>&nbsp;      
            
         </Toolbar>
    </AppBar>
    </div>
  )
}
