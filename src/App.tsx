import React from 'react';
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// * Components

// ! Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/404Page';


const App: React.FC = () => {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/404' element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App
