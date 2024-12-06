import './error-message.css';
import { useAppSelector } from '../../hooks';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

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
