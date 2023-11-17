import React from 'react'
import  { Grid, TextField } from '@mui/material'
import perso from '../images/person_img.png'
import '../Styles/Header.scss'

export default function HeaderPage() {
  return (
    <header className='headerpage'>
        <Grid >
          <Grid container sx={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', mt:5, mb:3, p:2}}>
            <h1 className='text-shadow-pop-br'>YEvent</h1>
            <img src={perso} alt='Connection' />
          </Grid>
          <Grid sx={{ml:12}} className='field_style'>      
            <TextField label="Recherche" variant="filled" color="success" focused />
          </Grid>
        </Grid>
    </header>
  )
}