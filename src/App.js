import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import Candidate from "./components/pages/Candidate";
import Community from "./components/pages/Community";
import Recruiter from "./components/pages/Recruiter";
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/candidate' element={<Candidate/>}/>
        <Route path='/recruiter' element={<Recruiter/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
