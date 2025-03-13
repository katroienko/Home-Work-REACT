
import cities from './cities';
import styles from './CitySelector.module.css';



const CitySelector = ({ onSelectCity }) => {
    const handleChange = (event) => {
        const selectedCity = cities.find(city => city.name === event.target.value);
        onSelectCity(selectedCity);
    };

    return (
        <div className={styles.select}>
            <h2>Select a City</h2>
            <select onChange={handleChange}>
                <option value="">Select...</option>
                {cities.map(city => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default CitySelector;