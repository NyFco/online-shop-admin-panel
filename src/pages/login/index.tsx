import { Button, Form, Input } from 'antd';

const { useForm } = Form;

const LoginPage = () => {
  const [loginForm] = useForm();
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form name="login" form={loginForm} id="login-form">
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 400,
            marginBottom: 20,
            fontSize: 24,
          }}
        >
          Admin Panel
        </h2>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Enter your email address please!',
            },
            {
              type: 'email',
              message: 'Enter a valid email address please!',
            },
          ]}
        >
          <Input placeholder="Email address" size="large" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Enter your password please!',
            },
          ]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ width: '100%' }} type="primary">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default LoginPage;
