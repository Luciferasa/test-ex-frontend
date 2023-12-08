import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import DevicePage from './pages/device-page/index';
import ExperimentDetailsPage from './pages/experiment-details-page/index';
import ExperimentsListPage from './pages/experiments-list-page/index';

import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <aside className="app-container__aside">
          <nav className="aside-menu">
            <Link className="aside-menu__link" to="/">
              Главная
            </Link>
            <Link className="aside-menu__link" to="/experiments-list">
              Список экспериментов
            </Link>
            <Link className="aside-menu__link" to="/experiment-detail">
              Страница эксперимента
            </Link>
          </nav>
        </aside>
        <main className="app-container__main">
          <Routes>
            <Route path="/" element={<DevicePage />} />
            <Route path="/experiments-list" element={<ExperimentsListPage />} />
            <Route
              path="/experiment-detail"
              element={<ExperimentDetailsPage />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
