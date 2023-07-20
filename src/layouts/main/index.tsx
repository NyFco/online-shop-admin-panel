import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import menuItems from './menuItems';
const { Sider, Content } = Layout;

const MainLayout = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const onNav: (to: string) => void = (to = '/') => {
    navigate(to);
  };
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          defaultOpenKeys={['dashboard']}
          style={{ height: '100%' }}
          items={menuItems}
          onSelect={(e) => onNav(e.key)}
        />
      </Sider>
      <Content style={{ marginLeft: 200 }}>{children}</Content>
    </Layout>
  );
};
export default MainLayout;
