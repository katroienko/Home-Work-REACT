export default function OrderStatus({ orderinfo }) {
    return (
      <ul>
        {orderinfo.map((order) => (
          <li key={order.orderId}>
            Заказ #{order.orderId}: {order.status}
          </li>
        ))}
      </ul>
    );
  }

//   Компонент OrderStatus получает props, который выглядит так:


// {
//   orderinfo: [
//     { orderId: 123, status: "в пути" },
//     { orderId: 124, status: "доставлен" },
//     { orderId: 125, status: "ожидает отправки" }
//   ]
// }

// export default function OrderStatus(props) {
//     console.log(props); // Посмотрим, что получили
//     return null; // Временно убираем рендер, чтобы проверить в консоли
//   }