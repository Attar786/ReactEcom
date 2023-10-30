import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/index.css"
import './assets/styles/bootstrap.custom.css'
import {

  createBrowserRouter, createRoutesFromElements,
  Route,RouterProvider
} from "react-router-dom"
import HomeScree from './Screen/HomeScree.jsx'
import ProductDetailsScreen from './Screen/ProductDetailsScreen.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
    <Route index={true} path='/' element={<HomeScree/>}/> 
    <Route path='/product/:id' element={<ProductDetailsScreen/>}/> 
    </Route> 
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router= {router}/>
</React.StrictMode>,
)
