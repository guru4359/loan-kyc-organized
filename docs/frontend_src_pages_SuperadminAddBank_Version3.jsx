import React, { useState } from 'react';

export default function SuperadminAddBank() {
  const [form, setForm] = useState({
    name: '', address: '', contact: '', logo_url: '', branding_colors: { primary: '', accent: '', background: '' }
  });
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // Replace with your API endpoint
    const resp = await fetch('/api/banks/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (resp.ok) setSuccess(true);
  }

  return (
    <div>
      <h2>Add New Bank</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Bank Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
        <input placeholder="Contact" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} />
        <input placeholder="Logo URL" value={form.logo_url} onChange={e => setForm({ ...form, logo_url: e.target.value })} />
        <input placeholder="Primary Color" value={form.branding_colors.primary} onChange={e => setForm({ ...form, branding_colors: { ...form.branding_colors, primary: e.target.value } })} />
        <input placeholder="Accent Color" value={form.branding_colors.accent} onChange={e => setForm({ ...form, branding_colors: { ...form.branding_colors, accent: e.target.value } })} />
        <input placeholder="Background Color" value={form.branding_colors.background} onChange={e => setForm({ ...form, branding_colors: { ...form.branding_colors, background: e.target.value } })} />
        <button type="submit">Add Bank</button>
      </form>
      {success && <div style={{color:"green"}}>Bank added successfully!</div>}
    </div>
  );
}