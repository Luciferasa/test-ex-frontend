import { useState } from 'react';

import './style.scss';

const DevicePage = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleOn = () => {
    setIsOn((isOn) => !isOn);
  };

  return (
    <div className="card device">
      <div className="card-header">
        <h3 className="card-title">Устройство № 1</h3>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="form-check form-switch">
            <label className="form-check-label">
              Устройство {isOn ? 'включено' : 'выключено'}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              checked={isOn}
              onChange={toggleOn}
            />
          </div>
        </li>
        <li className="list-group-item">
          Температура: <span className="indicator">30 </span>°C
        </li>
        <li className="list-group-item">
          Напряжение: <span className="indicator">50 </span>В
        </li>
      </ul>
    </div>
  );
};

export default DevicePage;
