import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteFilm } from '../../store/action';
import { getFavoriteFilmsCount } from '../../store/app-data/selectors';
import { Film } from '../../types/types';

type MyListButtonProps = {
  filmId: Film['id'];
  isFavorite: boolean;
}

function MyListButton({filmId, isFavorite}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilmsCount = useAppSelector(getFavoriteFilmsCount);
  const handleAddToMyListClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    const status = isFavorite ? 0 : 1;
    dispatch(postFavoriteFilm({filmId, status}));
  };
  return (
    <button onClick={handleAddToMyListClick} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list ({favoriteFilmsCount})</span>
    </button>
  );
}

export default MyListButton;

