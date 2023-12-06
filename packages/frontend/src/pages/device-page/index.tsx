import './style.scss';

const DevicePage = () => {
  return (
    <div className="device">
      <div>Устройство № 1</div>
      <div className="switch">
        <span className="switch-label">Состояние выкл/вкл</span>
        <label className="switch-wrapper">
          <input type="checkbox" className="switch-checkbox" />
          <span className="switch-slider"></span>
        </label>
      </div>
      <div>
        Температура: <span className="indicator">30 </span>°C
      </div>
      <div>
        Напряжение: <span className="indicator">50 </span>В
      </div>
    </div>
  );
};

export default DevicePage;
