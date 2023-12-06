import { useNavigate } from 'react-router-dom';

import { experiments, ExperimentsType } from '../../data';

import './style.scss';

const ExperimentsListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="experiments-list">
      {experiments.map((experiment: ExperimentsType) => (
        <div
          key={experiment.id}
          className="experiment"
          onClick={() => navigate('/experiment-detail/')}
        >
          {experiment.name}
        </div>
      ))}
    </div>
  );
};

export default ExperimentsListPage;
