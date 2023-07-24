import { Col, Divider, Row } from 'antd';

import { Stats } from '../../components';
import formatter from '../../components/countup';

const Dashboard = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col flex={2}>
        <div
          style={{
            background: 'linear-gradient(45deg,#cd4b8f, #e76581)',
            color: '#fff',
            borderRadius: 12,
            boxShadow: '0 0 10px #cd4b8f',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <h1
            style={{
              background:
                'linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
              borderRadius: '12px 12px 0 0',
              padding: 12,
            }}
          >
            Today&apos;s Order
          </h1>
          <div
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              paddingLeft: 12,
            }}
          >
            <h2 style={{ color: '#ccc' }}>Friday 21st July, 2023</h2>
            <h1 style={{ fontSize: '2.5rem' }}>${formatter(14921)}</h1>
          </div>
          <div style={{ margin: 0, padding: '0 12px 24px 12px' }}>
            <Divider
              type="horizontal"
              style={{ borderColor: '#ccc', marginTop: 0 }}
            />
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
                <p>{formatter(224)}</p>
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
                <p>{formatter(12)}</p>
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
                <p>{formatter(210)}</p>
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
                <p>{formatter(112)}</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Stats
        title="Online Users"
        s1t="Last 30 Mins"
        s1v={96}
        s2t="Right Now"
        s2v={12}
        bgGradient={['#289ab9', '#70d2eb']}
      />
      <Stats
        title="New VS Returning"
        s1t="Returning"
        s1v={133}
        s2t="New"
        s2v={21}
        bgGradient={['#ed796c', '#ef8c6b']}
      />
      <Stats
        title="Checkout Status"
        s1t="Completed"
        s1v={981}
        s2t="Abandoned"
        s2v={654}
        bgGradient={['#b496d6', '#8597da']}
      />
    </Row>
  );
};
export default Dashboard;
