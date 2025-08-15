import React, { useState } from 'react';

export default function LoanApplicationForm({ bank, loanTypes, kycDocs, isDemo }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', accountHolder: false, accountNumber: '', loanType: '', documents: []
  });
  const [skipKYC, setSkipKYC] = useState(false);

  function handleSkipKYC() {
    setSkipKYC(true);
    // Optionally, set a flag in application record (e.g., form.skipKYC = true)
  }

  return (
    <div>
      <h2>Apply for a Loan at {bank.name}</h2>
      <form>
        {/* ... Normal form fields ... */}
        {!skipKYC && (
          <div>
            {/* KYC Document Uploads */}
            <h3>KYC Documents</h3>
            {/* KYC upload UI here */}
            {isDemo && (
              <button type="button" onClick={handleSkipKYC} style={{ margin: '1em', backgroundColor: '#fbc02d', color: '#212121' }}>
                Skip KYC (Test Only)
              </button>
            )}
          </div>
        )}
        {skipKYC && (
          <div style={{ color: '#43a047', fontWeight: 'bold' }}>
            KYC skipped for testing! You can proceed with the application.
          </div>
        )}
        {/* Preview and Submit buttons */}
      </form>
    </div>
  );
}