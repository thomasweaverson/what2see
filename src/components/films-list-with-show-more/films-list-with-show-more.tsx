import { useAppSelector } from '../../hooks';
import { getIsFilmsLoadingStatus, selectFilms } from '../../store/app-data/selectors';


import FilmsList from '../films-list/films-list';
import LoadingScreen from '../loader/loader';
import ShowMoreButton from '../show-more-button/show-more-button';


function FilmsListWithShowMore(): JSX.Element {
  const isFilmsLoading = useAppSelector(getIsFilmsLoadingStatus);
  const { showingFilms, isAllFilmsShowing } = useAppSelector(selectFilms);


  if (isFilmsLoading) {
    return (
      <div className="catalog__films-list">
        <LoadingScreen />
      </div>
    );
  }


  return (
    <>
      <FilmsList films={showingFilms} />
      {!isFilmsLoading && !isAllFilmsShowing && <ShowMoreButton />}
    </>
  );
}

export default FilmsListWithShowMore;
