import axios from 'axios';
import {useState, useEffect} from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);
   
    const fetchUser = async () => {
        try {
            const response = await axios.get("https://randomuser.me/api");
            setUser(response.data.results[0]);
        } catch (error) {
            console.error("Ошибка загрузки данных:", error.message);
        } finally {
            setLoading(false); 
        }
    };


    useEffect(() => {
        fetchUser();
    }, []);
    // <div className={styles.user-profile}>

    return (
        <div className="user-profile">
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                user && (
                    <div className={styles.user}>
                        <img src={user.picture.large} alt="User Avatar" />
                        <h2>{user.name.first} {user.name.last}</h2>
                        <p>Email: {user.email}</p>
                        <p>Location: {user.location.city}, {user.location.country}</p>
                        <button onClick={fetchUser}>Загрузить нового пользователя</button>
                    </div>
                )
            )}
        </div>
    );
};

export default UserProfile;
