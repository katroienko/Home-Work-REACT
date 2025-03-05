import React, { useState } from "react";
import "./List2.css";

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className="list-container">
      <h2>Список приглашенных</h2>
      {people.length > 0 ? (
        <ol className="guest-list">
        {people.map((person) => (
          <li key={person.id} className="person-item">
            <div className="person-content">
              <span className="person-info">
                {person.name}, {person.age} лет
              </span>
              <button className="delete-btn" onClick={() => removePerson(person.id)}>
                ❌ Удалить
              </button>
            </div>
          </li>
        ))}
      </ol>
      ) : (
        <p>Все гости удалены!</p>
      )}
    </div>
  );
};

export default List;