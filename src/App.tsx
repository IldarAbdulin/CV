import { Layout } from './components';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './links/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="w-[80%] m-auto main">
          <AppRouter />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
