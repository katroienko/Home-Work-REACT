import './App.css';
import Test from './Test';
import ShowAuto from './mashina-list/mashina-list';
import Greeting from './Greeting/Greeting';
import ShoppingList from './ShoppingList/ShoppingList';
import OrderStatus from './OrderStatus/OrderStatus';

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
      <ShowAuto />
      <Test />

    </>
  );
}

export default App;

// const props = { name: 'Богдан' }; обэкт


// export default function Footer() {
//   return <footer>Подвал сайта</footer>;
// }