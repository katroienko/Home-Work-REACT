import Greeting from './Greeting/Greeting';
import ShoppingList from './ShoppingList/ShoppingList';
import OrderStatus from './OrderStatus/OrderStatus';
import './App.css';


function App() {
  
  const itemsmass = ["milk", "shuger", "eggs"];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 124, status: "доставлен" },
    { orderId: 125, status: "ожидает отправки" },
  ];
  return (
    <> 
      <div>
        <OrderStatus  orderinfo={orders} />
        <ShoppingList items={itemsmass} />
        <Greeting name="Богдан" />
        <Greeting name="Алиса" />
        {/* <Greeting /> */}
      </div>
    </>
  );
}

export default App;

// const props = { name: 'Богдан' }; обэкт


// export default function Footer() {
//   return <footer>Подвал сайта</footer>;
// }