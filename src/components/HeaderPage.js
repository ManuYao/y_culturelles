import React from 'react'
import  { Grid, TextField } from '@mui/material'
import '../Styles/Header.scss'

export default function HeaderPage() {
  return (
    <div className='headerpage'>
        <Grid container sx={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <h1 className='text-shadow-pop-br'>YEvent</h1>
            <img src='#' alt='Connection' />
            <Grid>      
                <TextField className='field_style' label="Recherche" variant="filled"/>
            </Grid>
        </Grid>
    </div>
  )
}
