import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from './components/layout/layout';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/business');
  }, [navigate]);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
