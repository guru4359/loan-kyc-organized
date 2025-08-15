import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ background: '#1565c0', padding: '1em', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1em', color: 'white' }}>Home</Link>
      <Link to="/apply" style={{ marginRight: '1em', color: 'white' }}>Apply for Loan</Link>
      <Link to="/superadmin/add-bank" style={{ color: 'white' }}>Add Bank (Superadmin)</Link>
    </nav>
  );
}