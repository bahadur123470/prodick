import React from 'react'
import { Box } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import Navbar from './components/Navbar..jsx';

const App = () => {
    return (
        <Box bg={'black'} minH={"100vh"}>
        <Navbar />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/create" element={ <CreatePage /> } />
        </Routes>
        </Box>
    );
}

export default App
