import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';

const { useForm } = Form;

import bg from '../../assets/loginBG.png';

const LoginPage = () => {
  const [loginForm] = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('email')) {
      navigate('/');
    }
  }, [navigate]);

  const submitFormHandler = () => {
    loginForm.validateFields().then((values) => {
      localStorage.setItem('email', values.email);
      message.success('You have logged in successfully!');
      navigate('/');
    });
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${bg}) center center no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <Form name="login" form={loginForm} id="login-form">
        <h2
          style={{
            textAlign: 'center',
            marginBottom: 20,
            fontSize: 24,
          }}
        >
          Admin Panel
        </h2>
        <Form.Item
          name="email"
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
          <Input id="login-email" placeholder="Email address" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
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
          <Button onClick={submitFormHandler}>Login</Button>
        </div>
      </Form>
    </div>
  );
};
export default LoginPage;
