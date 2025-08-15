import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanApplicationForm from './pages/LoanApplicationForm';
import SuperadminAddBank from './pages/SuperadminAddBank';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/apply" element={<LoanApplicationForm isDemo={true} />} />
        <Route path="/superadmin/add-bank" element={<SuperadminAddBank />} />
        <Route path="/" element={<div>Welcome to Sahyadri Rural Co-Operative Bank MVP</div>} />
      </Routes>
    </Router>
  );
}

export default App;