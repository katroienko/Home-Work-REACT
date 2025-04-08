import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import styles from './CatImage.module.css'

function CatImage() {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCatImage = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setImageUrl(response.data[0].url);
        } catch (error) {
            setError('Ошибка при загрузке изображения:', error.message);
        }
        finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchCatImage();
    }, []);

    return (
        <div className={styles.container}>
            <h2>Случайное изображение кота</h2>
            <div className={styles.wrapper_cat_img}>
                {loading ? (
                    <p>Загрузка...</p>
                ) : (
                    <img src={imageUrl} alt="Случайный кот" className={styles.catImage} />
                )}
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
            </div>
            <button onClick={fetchCatImage} className={styles.button}>
                Новое изображение кота
            </button>
        </div>
    );
}

export default CatImage