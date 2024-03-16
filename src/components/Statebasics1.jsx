import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const Statebasics1 = () => {

    var name = "class"
    var [name, setName] = useState()

    const changeHname = () => {

        setName("Home")
    }
    const changeAname = () => {

        setName("About")
    }
    const changeCname = () => {

        setName("Contacts")
    }
    useEffect(()=>{ 
        changeHname()
        },[])
    return (
        <div style={{ paddingTop: "100px" }}>

            <Typography variant='h4'>WELCOME to {name} page</Typography>
            <Button variant='contained' color='success' onClick={changeHname}>Home</Button>&nbsp;&nbsp;
            <Button variant='contained' color='error' onClick={changeAname}>About</Button>&nbsp;&nbsp;
            <Button variant='contained' color='warning' onClick={changeCname}>Contacts</Button>&nbsp;&nbsp;
        </div>
    )
}
