import { Col, Divider, Row } from 'antd';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Stats } from '../../components';
import formatter from '../../components/countup';

const dailySaleData = [
  { date: '1', revenue: 500 },
  { date: '2', revenue: 600 },
  { date: '3', revenue: 400 },
  { date: '4', revenue: 750 },
  { date: '5', revenue: 1000 },
  { date: '6', revenue: 900 },
  { date: '7', revenue: 800 },
  { date: '8', revenue: 650 },
  { date: '9', revenue: 850 },
  { date: '10', revenue: 700 },
  { date: '11', revenue: 950 },
  { date: '12', revenue: 1100 },
  { date: '13', revenue: 800 },
  { date: '14', revenue: 750 },
  { date: '15', revenue: 600 },
  { date: '16', revenue: 400 },
  { date: '17', revenue: 900 },
  { date: '18', revenue: 750 },
  { date: '19', revenue: 1000 },
  { date: '20', revenue: 800 },
  { date: '21', revenue: 700 },
  { date: '22', revenue: 850 },
  { date: '23', revenue: 750 },
  { date: '24', revenue: 1100 },
  { date: '25', revenue: 900 },
  { date: '26', revenue: 750 },
  { date: '27', revenue: 600 },
  { date: '28', revenue: 950 },
  { date: '29', revenue: 800 },
  { date: '30', revenue: 700 },
];

const monthlySaleData = [
  { month: '1', revenue: 500 },
  { month: '2', revenue: 600 },
  { month: '3', revenue: 400 },
  { month: '4', revenue: 750 },
  { month: '5', revenue: 1000 },
  { month: '6', revenue: 900 },
  { month: '7', revenue: 800 },
  { month: '8', revenue: 650 },
  { month: '9', revenue: 850 },
  { month: '10', revenue: 700 },
  { month: '11', revenue: 950 },
  { month: '12', revenue: 1100 },
];

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
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <h1 style={{ fontWeight: 400, marginBottom: 24 }}>Daily Sale</h1>
        <ResponsiveContainer width="100%" height="100%" maxHeight={400}>
          <LineChart width={100} height={300} data={dailySaleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="revenue" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#6b8068"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <h1 style={{ fontWeight: 400, marginBottom: 24 }}>Monthly Sale</h1>
        <ResponsiveContainer width="100%" height="100%" maxHeight={400}>
          <BarChart width={150} height={40} data={monthlySaleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="revenue" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#6b8068" />
          </BarChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};
export default Dashboard;
