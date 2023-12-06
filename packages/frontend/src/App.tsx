import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import DevicePage from './pages/device-page/index';
import ExperimentDetailsPage from './pages/experiment-details-page/index';
import ExperimentsListPage from './pages/experiments-list-page/index';

import './App.scss';

const App = () => {
  return (
    <div className="container">
      <Router>
        <aside className="aside">
          <nav className="aside-menu">
            <Link to="/">Главная</Link>
            <Link to="/experiments-list">Список экспериментов</Link>
          </nav>
        </aside>
        <Routes>
          <Route path="/" element={<DevicePage />} />
          <Route path="/experiments-list" element={<ExperimentsListPage />} />
          <Route
            path="/experiment-detail"
            element={<ExperimentDetailsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
