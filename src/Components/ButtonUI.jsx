import React from 'react'
import {Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
const ButtonUI = () => {
  return (
    <div>
<Button  variant='contained' color='secondary'>Contained</Button>
<Button  variant='text'>Contained</Button>
<Button  variant='outlined'>Contained</Button>
<Button variant='contained' startIcon={<FacebookIcon/>}>Facebook </Button>
<Button variant='contained' endIcon={<FacebookIcon/>}>Facebook </Button>
    </div>
  )
}

export default ButtonUI