import './style.css';

const DevicePage = () => {
  return (
    <div className="device">
      <div>Устройство № 1</div>
      <div className="switch-container">
        <span className="switch-label">Состояние выкл/вкл</span>
        <label className="switch">
          <input type="checkbox" />
            <span className="slider"></span>
        </label>
      </div>
      <div>Температура: <span className="indicator">30 </span>°C</div>
      <div>Напряжение: <span className="indicator">50 </span>В</div>
    </div>
  )
}

export default DevicePage;
