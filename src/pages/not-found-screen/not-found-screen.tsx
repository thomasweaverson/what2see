import { Link } from 'react-router-dom';
import './not-found-screen.css'; // Добавляем отдельный файл стилей
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="not-found-page">
      <Header />
      <section className="not-found">
        <h1 className="not-found__title">404. Page not found</h1>
        <p className="not-found__description">Кажется, вы зашли не в ту дверь</p>
        <Link to="/" className="not-found__link">
          Вернуться на главную
        </Link>
      </section>
    </div>
  );
}

export default NotFoundScreen;
