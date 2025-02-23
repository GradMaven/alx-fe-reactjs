import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${name}!`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', margin: '10px' }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', margin: '10px' }}
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: '10px', margin: '10px' }}
          />
        </div>
        <div>
          <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
