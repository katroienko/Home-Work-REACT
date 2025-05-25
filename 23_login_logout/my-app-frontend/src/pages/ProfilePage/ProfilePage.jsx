import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import styles from './ProfilePage.module.css';

// Импортируй экшен logout из своего auth-слайса
// import { logout } from "../../redux/auth/auth-slice";
import {logout} from '../../redux/auth/auth-slice'

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <Container>
            <PageTitle>Profile</PageTitle>
            <button
                className={styles.logoutBtn}
                onClick={handleLogout}
            >
                Log out
            </button>
        </Container>
    )
}

export default ProfilePage;


// import Container from "../../shared/components/Container/Container";
// import PageTitle from "../../shared/components/PageTitle/PageTitle";

// import styles from './ProfilePage.module.css'

// const ProfilePage = () => {
//     return (
//         <Container>
//             <PageTitle>Profile</PageTitle>
//             <button
//                 className={styles.logoutBtn}
//             >
//                 Log out
//             </button>
//         </Container>
//     )
// }

// export default ProfilePage;