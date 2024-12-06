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

  const overviewTabClass = activeTab === 'overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item';
  const detailsTabClass = activeTab === 'details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item';
  const reviewsTabClass = activeTab === 'reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item';

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={overviewTabClass}>
          <a href="#/" className="film-nav__link" onClick={onTabClick('overview')}>Overview</a>
        </li>
        <li className={detailsTabClass}>
          <a href="#/" className="film-nav__link" onClick={onTabClick('details')}>Details</a>
        </li>
        <li className={reviewsTabClass}>
          <a href="#/" className="film-nav__link" onClick={onTabClick('reviews')}>Reviews</a>
        </li>
      </ul>
    </nav>
  );
}

export default FilmScreenTabs;
