
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/users/users-selectors';
import { List, Avatar, Typography, Card } from 'antd';

const { Title } = Typography;

function UserList() {
  const items = useSelector(selectAllUsers);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <Title level={2} style={{ textAlign: 'center', color: 'black' }}>User List</Title>
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={item => (
          <Card style={{ marginBottom: 10 }}>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} size={50} />}
                title={<span style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</span>}
                description={
                  <div style={{ color: 'black' }}>
                    <div>{item.email}</div>
                    <div>Age: {item.age}</div>
                  </div>
                }
              />
            </List.Item>
          </Card>
        )}
      />
    </div>
  );
}

export default UserList;
