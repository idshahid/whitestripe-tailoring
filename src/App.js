import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import AbuDhabi from './pages/AbuDhabi';
import Dubai from './pages/Dubai';
import Fabrics from './pages/Fabrics';
import Contact from './pages/Contact';
import TermsAndCondition from './pages/TermsAndCondition';
import Appointment from './pages/Appointment';
import WhatsApp from './components/WhatsApp';

function App() {

  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <WhatsApp />
      <BrowserRouter>
        <Navbar setOpenMenu={setOpenMenu} />
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/abu-dhabi' element={<AbuDhabi />} />
          <Route path='/dubai' element={<Dubai />} />
          <Route path='/fabrics' element={<Fabrics />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms-and-conditions' element={<TermsAndCondition />} />
          <Route path='/appointment' element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
