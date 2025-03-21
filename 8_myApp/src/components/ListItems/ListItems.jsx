import { useState, useEffect } from 'react';
import './ListItems.css';

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("компонент обновлен");
  }, []);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder="Напишыте что-то в список"
        />
        <button onClick={addItem} className="button">Добавить</button>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
