import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { ConfigProvider } from "antd";

import "antd/dist/reset.css";

const { Title } = Typography;

function App() {
  const [form] = Form.useForm();
  const [data, setData] = useState(null);

  const onFinish = (values) => {
    setData(values);
    form.resetFields();
  };

  return (
    <ConfigProvider>
      <div style={{ maxWidth: 600, margin: "50px auto", padding: "20px" }}>
        <Title level={2}>Input Form</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter a description" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {data && (
          <>
            <Title level={2}>Sent Data</Title>
            <Card
              title={data.name}
              style={{ marginTop: 30 }}
            >
              <p>{data.description}</p>
            </Card>
          </>
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;
