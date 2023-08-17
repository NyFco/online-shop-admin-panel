import { FrownOutlined } from '@ant-design/icons';

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#800',
      }}
    >
      <h1 style={{ fontSize: '5rem' }}>
        <FrownOutlined />
      </h1>
      <h1 style={{ fontSize: '3rem' }}>404, Not Found...</h1>
    </div>
  );
};
export default NotFoundPage;
