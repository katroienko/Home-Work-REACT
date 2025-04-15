

function UserItem({ users }) {
  console.log(users);

  const elements = users.map(user => (
    <li key={user.id}>{user.name}</li>
  ));

  return (
    <div>
      <h1>User List</h1>
      <ul>{elements}</ul>
    </div>
  );
}

export default UserItem;