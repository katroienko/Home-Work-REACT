const ShoppingList = ({ items }) => {
    // Проверяем, если массив пустой, выводим сообщение
    if (items.length === 0) {
      return <p>Список покупок пуст</p>;
    }
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default ShoppingList;


//   <ul>
//   <li key={0}>milk</li>
//   <li key={1}>sugar</li>
//   <li key={2}>eggs</li>
// </ul>