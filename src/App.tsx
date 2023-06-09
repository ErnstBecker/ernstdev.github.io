import React from 'react';
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// * Components

// ! Pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/404Page';


const App: React.FC = () => {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App
