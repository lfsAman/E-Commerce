import { Grid } from '@mui/material'
import React from 'react'
import Achievment from './Achievment'
import MonthlyOverView from './MonthlyOverView'
import ProductsTable from './ProductsTable'
import OrderTableView from '../view/OrderTableView.jsx'
import ProductTableView from '../view/ProductTableView'

const Dashboard = () => {
  return (
    <div className='p-10 mt-2'>
      <Grid container spacing={2} >
        
        <Grid  item xs={12} md={4} >
          <div className='shadow-gray-600 shadow-lg'>
          <Achievment/>
          </div>
          
        </Grid>

        <Grid  item xs={12} md={8} >
          <div className='shadow-gray-600 shadow-lg'>
          <MonthlyOverView/>
          </div>
          
        </Grid>
        
        <Grid  item xs={12} md={12} >
          <div className='shadow-gray-600 shadow-lg'>
          <OrderTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
        <div className='shadow-gray-600 shadow-lg'>
          <ProductTableView/>
          </div>
        </Grid>
        
       

      </Grid>
    </div>
  )
}

export default Dashboard