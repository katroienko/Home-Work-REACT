import SocialMedia from '../SocialMedia/SocialMedia'

import styles from './Main.module.css';

const Main = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
                <div className={styles.content}>
                    <p className={styles.text_content}>Sign in</p>
                    <p className={styles.text_content}>with</p>
                </div>
                <SocialMedia />
            </div>
        </section>
    )
}
export default Main;