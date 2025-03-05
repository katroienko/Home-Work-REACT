import List from '../List/List';
import Rating from '../Rating/Rating'
import './App.css'

const App = () => {
  return (
    <>
      <div className="rating-container">
        <h1>Поставьте свою оценку</h1>
        <Rating />
      </div>
      <div className="rating-container">
        <List />
      </div>
    </>

  );
};
export default App;