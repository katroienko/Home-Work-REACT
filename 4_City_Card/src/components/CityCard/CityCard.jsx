import styles from './CityCard.module.css';

const CityCard = ({ city }) => {
    if (!city) return <div className= "select">Please select a city.</div>;
  
    return (
      <div className={styles.information}>
        <h2 className={styles.title}>{city.name}</h2>
        <div className={styles.image}>
            <img src={city.image} alt={city.name} />
        </div>
        <p>{city.description}</p>
        <ul>
          {city.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    );
  };
export default CityCard;