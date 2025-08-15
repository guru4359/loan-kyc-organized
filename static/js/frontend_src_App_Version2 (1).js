import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanApplicationForm from './pages/LoanApplicationForm';
import SuperadminAddBank from './pages/SuperadminAddBank';
import Index from './pages/Index';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/apply" element={<LoanApplicationForm isDemo={true} />} />
        <Route path="/superadmin/add-bank" element={<SuperadminAddBank />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;