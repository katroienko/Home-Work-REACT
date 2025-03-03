function ShoppingList({ items }) {
    return (
      <div>
        <h2>Список покупок</h2>
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Список покупок пуст</p>
        )}
      </div>
    );
  }
  
  export default ShoppingList;