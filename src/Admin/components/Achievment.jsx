import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'
const triangleImage=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const trophyImage=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:'absolute'
})
const Achievment = () => {
  return (
    <Card className='space-y-5' sx={{position:'relative'}} >
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}} >Aiman Khan</Typography>
            <Typography variant='body2'>Congratulations 🥳</Typography>
            <Typography variant='h5' sx={{my:3.1}} >109.9k</Typography>
            <Button size='small' variant='contained' >Sales</Button>
            <triangleImage src='' />
            <img src='https://shopwithzosh.vercel.app/images/misc/trophy.png' alt="Trophy" style={{ right: 36, bottom: 20, height: 98, position: 'absolute' }} />
           
        </CardContent>
    </Card>
  )
}

export default Achievment