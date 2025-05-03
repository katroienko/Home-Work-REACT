import { GoogleIcon, XIcon, MacIcon } from '../../assets/icons/mediaIcons';

import styles from './SocialMedia.module.css';

const SocialMedia = () => {
    return (
        <div className={styles.logo_container}>
            <MacIcon className={styles.logo} />
            <GoogleIcon className={styles.logo} />
            <XIcon className={styles.logo} />
        </div>
    )
};

export default SocialMedia;