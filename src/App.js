import React from 'react';
import { Routes,Route } from 'react-router-dom'; //we gonna use this to route between our homepage and detail page
import { Box } from '@mui/material'; //this box component have is simply a div having some shading and colors
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    // we wrap our entire app inside this box component
    // sx stands for extra large devices and m for margin 
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">  
    
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
    </Box>
  )
}

export default App;