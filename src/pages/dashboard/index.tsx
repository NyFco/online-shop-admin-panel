import { Col, Divider, Row } from 'antd';

import formatter from '../../components/countup';

// const data = [
//   { date: '1', revenue: 500 },
//   { date: '2', revenue: 600 },
//   { date: '3', revenue: 400 },
//   { date: '4', revenue: 750 },
//   { date: '5', revenue: 1000 },
//   { date: '6', revenue: 900 },
//   { date: '7', revenue: 800 },
//   { date: '8', revenue: 650 },
//   { date: '9', revenue: 850 },
//   { date: '10', revenue: 700 },
//   { date: '11', revenue: 950 },
//   { date: '12', revenue: 1100 },
//   { date: '13', revenue: 800 },
//   { date: '14', revenue: 750 },
//   { date: '15', revenue: 600 },
//   { date: '16', revenue: 400 },
//   { date: '17', revenue: 900 },
//   { date: '18', revenue: 750 },
//   { date: '19', revenue: 1000 },
//   { date: '20', revenue: 800 },
//   { date: '21', revenue: 700 },
//   { date: '22', revenue: 850 },
//   { date: '23', revenue: 750 },
//   { date: '24', revenue: 1100 },
//   { date: '25', revenue: 900 },
//   { date: '26', revenue: 750 },
//   { date: '27', revenue: 600 },
//   { date: '28', revenue: 950 },
//   { date: '29', revenue: 800 },
//   { date: '30', revenue: 700 },
// ];

const Dashboard = () => {
  return (
    <Row gutter={24}>
      <Col flex={2}>
        <div
          style={{
            background: 'linear-gradient(45deg,#cd4b8f, #e76581)',
            color: '#fff',
            padding: 12,
            borderRadius: 12,
            boxShadow: '0 0 10px #cd4b8f',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <h4>Today&apos;s Order</h4>
            <div
              style={{
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <p style={{ color: '#ccc' }}>Friday 21st July, 2023</p>
              <h1 style={{ fontSize: '2.5rem' }}>${formatter(14921)}</h1>
            </div>
            <div style={{ margin: 0 }}>
              <Divider type="horizontal" style={{ borderColor: '#ccc' }} />
              <div
                style={{
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,
                    fontSize: '1.1rem',
                  }}
                >
                  <p style={{ color: '#ccc' }}>Sold</p>
                  <p>224</p>
                </div>
                <Divider type="vertical" style={{ borderColor: '#ccc' }} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,
                    fontSize: '1.1rem',
                  }}
                >
                  <p style={{ color: '#ccc' }}>Returns</p>
                  <p>12</p>
                </div>
                <Divider type="vertical" style={{ borderColor: '#ccc' }} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,
                    fontSize: '1.1rem',
                  }}
                >
                  <p style={{ color: '#ccc' }}>Picked</p>
                  <p>210</p>
                </div>
                <Divider type="vertical" style={{ borderColor: '#ccc' }} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,
                    fontSize: '1.1rem',
                  }}
                >
                  <p style={{ color: '#ccc' }}>In Transit</p>
                  <p>112</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Dashboard;
