import { Link } from 'react-router-dom';

import { experiments, ExperimentsType } from '../../data';

import './style.scss';

const ExperimentsListPage = () => {
  return (
    <div className="experiments-list">
      {experiments.map((experiment: ExperimentsType) => (
        <div key={experiment.id} className="card">
          <div className="card-header">
            <h5 className="card-title">{experiment.name}</h5>
          </div>
          <div className="card-body">
            <Link to="/experiment-detail/" className="btn btn-primary">
              Смотреть эксперимент
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperimentsListPage;
