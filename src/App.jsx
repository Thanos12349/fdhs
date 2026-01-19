import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollTop from './components/ScrollToTop';
import TuhituBlissPage from './Pages/TuhituBliss.jsx';
import TuhituOneLifeCircle from './Pages/TuhituOneLifeCircle.jsx';
import Dietin from './Pages/Dietin.jsx';
import DoctorSahib from './Pages/DoctorSahib.jsx';
import TuhituSevaMed from './Pages/TuhituSevaMed.jsx';
import SEyRAYA from './Pages/SEyRAYA.jsx';
import CloudICUPage from './Pages/CloudICUPage.jsx';
import Medumass from './Pages/MedumassPage.jsx';
import Physiovera from './Pages/PhysioVeraPage.jsx';
function App() {

  return (
    <ScrollTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/TuhituBlissPage' element={<TuhituBlissPage />} />
        <Route path='/TuhituOneLifeCircle' element={<TuhituOneLifeCircle />} />
        <Route path='/Dietin' element={<Dietin />} />
        <Route path='/TuhituSevaMed' element={<TuhituSevaMed />} />
        <Route path='/DoctorSahib' element={<DoctorSahib />} />
        <Route path='/SEyRAYA' element={<SEyRAYA />} />
        <Route path='/CloudICUPage' element={<CloudICUPage />} />
        <Route path='/Medumass' element={<Medumass />} />
        <Route path='/Physiovera' element={<Physiovera />} />

      </Routes>
    </ScrollTop>

  )
}

export default App