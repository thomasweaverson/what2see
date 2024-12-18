import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenres } from '../../store/app-data/selectors';
import { resetShowingFilmsStep, setGenre } from '../../store/app-process/app-process';
import { getGenre } from '../../store/app-process/selectors';

function GenresList(): JSX.Element {
  const genres = useAppSelector(getGenres);
  const currentGenre = useAppSelector(getGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = (event: React.MouseEvent<HTMLLIElement>, genre: string) => {
    event.preventDefault();
    if (genre !== currentGenre) {
      dispatch(setGenre(genre));
      dispatch(resetShowingFilmsStep());
    }
  };


  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`}
          onClick={(event) => handleGenreClick(event, genre)}
        >
          <a href="#/" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
