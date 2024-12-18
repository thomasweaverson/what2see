import { useAppDispatch } from '../../hooks';
import { increaseShowingFilmsStep } from '../../store/app-process/app-process';

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
