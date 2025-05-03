// import styles from './Header.module.css';

// const Header = () => { 
//     return (
//         <div className={styles.header}>
//             <img src="spotyfy\src\assets\g10.svg" alt="spotyfyLogo" />
//         </div>
//     )
// }
// export default Header;


import SpotifyLogo from '../../assets/icons/SpotifyLogo';

import styles from './Header.module.css';

const Header = ()=> {
    return (
        <nav className={styles.header}>
            <a href="#"> <SpotifyLogo className={styles.logo} /></a>
        </nav>
    )
};

export default Header;