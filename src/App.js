import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './Routes';

function App() {
  let routesRouter = useRoutes(routes)
  return (
    routesRouter
  );
}

export default App;
