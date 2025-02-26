import './App.css';
import Test from './Test';
import ShowAuto from './mashina-list/mashina-list';
import Greeting from './Greeting/Greeting';
import ShoppingList from './ShoppingList/ShoppingList';

function App() {
  
  const itemsmass = ["milk", "shuger", "eggs"];
  return (
    <> 
      <div>
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