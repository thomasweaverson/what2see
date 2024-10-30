import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { MouseEvent } from 'react';
type FilmScreenTabsProps = {
  id: number;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function FilmScreenTabs({id, activeTab, setActiveTab}: FilmScreenTabsProps) {
  const onTabClick = (tab: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={activeTab === 'overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <a href="#/" className="film-nav__link" onClick={onTabClick('overview')}>Overview</a>
        </li>
        <li className={activeTab === 'details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <a href="#/" className="film-nav__link" onClick={onTabClick('details')}>Details</a>
        </li>
        <li className="film-nav__item">
          <Link to={`/films/${id}${AppRoute.AddReview}`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmScreenTabs;
