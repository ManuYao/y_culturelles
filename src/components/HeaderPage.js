import React from 'react'
import  { Grid, TextField } from '@mui/material'
import perso from '../images/person_img.png'
import '../Styles/Header.scss'

export default function HeaderPage() {
  return (
    <div className='headerpage'>
        <Grid >
          <Grid container sx={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <h1 className='text-shadow-pop-br'>YEvent</h1>
            <img src={perso} alt='Connection' />
          </Grid>
          <Grid sx={{ml:5}}>      
            <TextField className='field_style' label="Recherche" variant="filled"/>
          </Grid>
        </Grid>
    </div>
  )
}
