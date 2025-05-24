
import { useSelector } from 'react-redux';
import Filter from '../Filter/Filter';
import UserItem from '../UsetItem/UserItem';
import { setFilter } from '../../redux/actions';

  function UserList() {
    const users = useSelector((store) => store.users);
    const filter = useSelector((store) => store.filter);
    console.log(filter)
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div>
        <Filter filtr={setFilter} />
        <h2>List of users</h2>
        <ul>
          {filteredUsers.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserList;
  