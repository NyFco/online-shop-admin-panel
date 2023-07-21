import { useNavigate } from 'react-router-dom';
import { Alert, Button, Layout, Menu } from 'antd';

import { Auth } from '..';

import menuItems from './menuItems';
const { Sider, Content } = Layout;

import { useState } from 'react';

import pjson from '../../../package.json';

const MainLayout = ({ children }: { children: JSX.Element }) => {
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const confirmLogoutHandler = () => {
    setAlertIsOpen(false);
    localStorage.removeItem('email');
    navigate('login');
  };

  const onNav: (to: string) => void = (to = '/') => {
    if (to === 'logout') {
      setAlertIsOpen(true);
    } else {
      navigate(to);
    }
  };

  return (
    <Auth>
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
            selectedKeys={[window.location.pathname]}
            style={{ height: '100%' }}
            onSelect={(e) => onNav(e.key)}
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon} danger={item.danger}>
                {item.label}
              </Menu.Item>
            ))}
            <p style={{ position: 'fixed', left: 10, bottom: 20 }}>
              Version: {pjson.version}
            </p>
          </Menu>
        </Sider>
        <Content style={{ marginLeft: 200 }}>{children}</Content>
        {alertIsOpen && (
          <Alert
            message={
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <p>Are you sure you want to logout?</p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Button
                    size="small"
                    danger
                    type="primary"
                    onClick={confirmLogoutHandler}
                  >
                    Confirm
                  </Button>{' '}
                  <Button
                    size="small"
                    onClick={() => {
                      setAlertIsOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            }
            type="error"
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          />
        )}
      </Layout>
    </Auth>
  );
};
export default MainLayout;
