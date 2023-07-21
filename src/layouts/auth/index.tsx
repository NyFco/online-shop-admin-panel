import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('email')) {
      navigate('/login');
    }
  }, [navigate]);
  return <>{children}</>;
};
export default Auth;
