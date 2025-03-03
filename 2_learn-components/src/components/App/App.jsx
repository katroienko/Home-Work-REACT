import OrderStatus from '../OrderStatus/OrderStatus';
import ShoppingList from '../ShoppingList/ShoppingList';
import Greeting from '../Greeting/Greeting'
import './App.css'

function App() {
  const itemsmass = ["milk", "shuger", "eggs"];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 124, status: "доставлен" },
    { orderId: 125, status: "ожидает отправки" },
  ];
  return (
    <>
    <Greeting name = "John" />
    <ShoppingList items = {itemsmass} />
    
    <div>
      <h1>Статусы заказов</h1>
      {orders.map((order) => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </div>
    </>
  )
}

export default App
