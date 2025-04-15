import { useSelector } from "react-redux"
function User() {
  //Создайте функциональный компонент `User`, который отображает имя и статус пользователя.
    const user = useSelector(store => store.user)
    console.log('приходит в юзер со стора   '+user);
    
    return (
        <>
            <h2>User information</h2>
            <p>User Name: {user.name}</p>
            <p>User Status: {user.status}</p>
            
        </>
    )
}

export default User