import {useState} from 'react';
import type {Film} from '../../types/film';
import FilmScreenTabs from '../film-screen-tabs/film-screen-tabs';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';

type FilmDescriptionProps = {
  film: Film;
};

function FilmDescription( {film}: FilmDescriptionProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('overview');
  return (
    <div className="film-card__desc">
      <FilmScreenTabs id={film.id} activeTab={activeTab} setActiveTab={setActiveTab}/>

      {activeTab === 'details' &&
        <FilmDetails
          director={film.director}
          starring={film.starring}
          genre={film.genre}
          released={film.released}
          runTime={film.runTime}
        /> }

      {activeTab === 'overview' &&
        <FilmOverview
          rating={film.rating}
          scoresCount={film.scoresCount}
          description={film.description}
          director={film.director}
          starring={film.starring}
        />}

    </div>
  );
}

export default FilmDescription;
