import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import DevicePage from './pages/device-page/index';
import ExperimentDetailsPage from './pages/experiment-details-page/index';
import ExperimentsListPage from './pages/experiments-list-page/index';

import './App.css'

const App = () => {
  return (
    <div className="container">
      <Router>
        <nav>
          <div className="slide-menu">
            <Link to="/">Главная</Link>
            <Link to="/experiments-list">Список экспериментов</Link>
            <Link to="/experiment-detail">Детали эксперимента</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<DevicePage />} />
          <Route path="/experiments-list" element={<ExperimentsListPage />} />
          <Route path="/experiment-detail/:id" element={<ExperimentDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
