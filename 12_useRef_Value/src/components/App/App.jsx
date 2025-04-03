import { useState } from 'react';
import ValueDisplay from '../ValueDisplay/ValueDisplay'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div className="brutalist-container">
        <input
          value={value}
          onChange={handleChange}
          placeholder="TYPE HERE"
          className="brutalist-input smooth-type"
          type="text"
        />
        <label className="brutalist-label">Пример использования useRef</label>
      </div>   
      <ValueDisplay inputValue={value} />
    </>
  )
}

export default App
