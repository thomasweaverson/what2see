import { increaseShowingFilmsStep } from '../../store/action';
import { useAppDispatch } from '../../hooks';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleShowMoreClick = () => {
    dispatch(increaseShowingFilmsStep());
  };
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreClick}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
