import style from './alert.module.css';


function AlertBox({ type = "success", message }) {
  const classMap = {
    success: style.success,
    warning: style.kodisional,
    error: style.error
  };

  const selectedClass = classMap[type] || style.success;

  return (
    <div className={`${selectedClass}`}>
      {message}
    </div>
  );
}

export default AlertBox;
