import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetShowingFilmsStep, setGenre } from '../../store/action';

type GenresListProps = {
  genres: string[];
}

function GenresList({genres}: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleGenreClick = (event: React.MouseEvent<HTMLLIElement>, genre: string) => {
    event.preventDefault();
    dispatch(setGenre(genre));
    dispatch(resetShowingFilmsStep());
  };

  const currentGenre = useAppSelector((state) => state.genre);

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
