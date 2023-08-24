import React, { useState } from 'react';
import './Form.css'; // Import your CSS file

export function Form({})  {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showNamePreview, setShowNamePreview] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") return;
    setShowNamePreview(true);
    setPassword("")
    
  };
  

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn">Add</button>
      <p></p>
      {showNamePreview && <div className="name-preview">Welcome {name}!</div>}
      
    
    </form>
    
  );
 }