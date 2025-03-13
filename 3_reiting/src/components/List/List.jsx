
import React, { useState } from "react";
import peopleData from "./peopleData"
import "./List2.css";

const List = () => {
  const [people, setPeople] = useState(peopleData);

  const removePerson = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
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