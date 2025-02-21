import React from 'react'
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      
      {/* Buttons for Increment, Decrement, and Reset */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        ➕ Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        ➖ Decrement
      </button>

      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px', fontSize: '16px', backgroundColor: 'red', color: 'white' }}>
        🔄 Reset
      </button>
    </div>
  );
}

export default Counter