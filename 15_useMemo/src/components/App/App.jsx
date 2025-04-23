import React, { useState, useCallback, useMemo } from 'react'; 
import UserList from './UserList/UserList';


const App = () => {
  const userList = useMemo(() => [
    { id: 1, name: 'Alex Johnson' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Brown' },
    { id: 4, name: 'Emily Davis' },
    { id: 5, name: 'Daniel Wilson' },
    { id: 6, name: 'Sophia Martinez' },
    { id: 7, name: 'David Anderson' },
    { id: 8, name: 'Olivia Thomas' },
    { id: 9, name: 'James Taylor' },
    { id: 10, name: 'Isabella Moore' }
  ], []);

  const [filter, setFilter] = useState('');

  // Мемоизированная функция фильтрации
  const filterUsers = useCallback(
    (users, query) => {
      const lowerCaseQuery = query.toLowerCase();
      return users.filter((user) =>
        user.name.toLowerCase().includes(lowerCaseQuery)
      );
    },
    []
  );

  // Мемоизированный результат фильтрации
  const filteredUsers = useMemo(
    () => filterUsers(userList, filter),
    [userList, filter, filterUsers]
  );

  return (
    <div>
      <h1>User list</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;  