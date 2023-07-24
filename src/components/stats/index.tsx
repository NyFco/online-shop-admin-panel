import { Col, Divider } from 'antd';

import formatter from '../countup';

const Stats = ({
  title,
  s1t,
  s1v,
  s2t,
  s2v,
  bgGradient = ['#289ab9', '#70d2eb'],
}: {
  title: string;
  s1t: string;
  s1v: number;
  s2t: string;
  s2v: number;
  bgGradient: [string, string];
}) => {
  return (
    <Col flex={1}>
      <div
        style={{
          background: `linear-gradient(${bgGradient[0]}, ${bgGradient[1]})`,
          color: '#fff',
          borderRadius: 12,
          boxShadow: `0 0 10px ${bgGradient[0]}`,
          height: '100%',
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
          {title}
        </h1>
        <div
          style={{
            padding: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 style={{ color: '#ddd' }}>{s1t}</h2>
          <h2 style={{ fontWeight: 900, fontSize: '3rem' }}>
            {formatter(s1v)}
          </h2>
          <Divider style={{ borderColor: '#ccc' }} />
          <h2 style={{ color: '#ddd' }}>{s2t}</h2>
          <h2 style={{ fontWeight: 900, fontSize: '3rem' }}>
            {formatter(s2v)}
          </h2>
        </div>
      </div>
    </Col>
  );
};
export default Stats;
