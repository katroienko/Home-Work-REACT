import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users/users-slice';

import { Typography, Form, Input, InputNumber, Button } from 'antd';
const { Title } = Typography;

function AddUserForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'column',
       
      }}
    >
      <Title level={2}>Add New User</Title>
      <Form
        onFinish={handleSubmit(onSubmit)}
        layout="vertical"
        style={{ width: 400 }}
      >
        <Form.Item
          label="Name"
          validateStatus={errors.name ? 'error' : ''}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => <Input {...field}  />}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            }}
            render={({ field }) => <Input {...field}  />}
          />
        </Form.Item>

        <Form.Item
          label="Age"
          validateStatus={errors.age ? 'error' : ''}
          help={errors.age?.message}
        >
          <Controller
            name="age"
            control={control}
            defaultValue=""
            rules={{
              required: 'Age is required',
              min: { value: 1, message: 'Minimum age is 1' }
            }}
            render={({ field }) => (
              <InputNumber {...field}  style={{ width: '100%' }} />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUserForm;
