import './error-message.css';
import { useAppSelector } from '../../hooks';
import { getError } from '../../store/app-process/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  if (!error) {
    return null;
  }

  return (
    <div className="error-message">
      <p>Sorry, it{'\''}s error time: {error}</p>
    </div>
  );
}

export default ErrorMessage;
