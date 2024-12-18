import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, SHOWING_FILMS_PER_STEP } from '../../const';
import { State } from '../../types/state';
import { Film, Review } from '../../types/types';
import { getGenre, getShowingFilmsStep } from '../app-process/selectors';


export const getFilms = ({[NameSpace.AppData]: APP_DATA}: State): Film[] => APP_DATA.films;
export const getIsFilmsLoadingStatus = ({[NameSpace.AppData]: APP_DATA}: State): boolean => APP_DATA.isFilmsLoadingStatus;

export const getCurrentFilm = ({[NameSpace.AppData]: APP_DATA}: State): Film | null => APP_DATA.currentFilm;
export const getIsCurrentFilmLoadingStatus = ({[NameSpace.AppData]: APP_DATA}: State): boolean => APP_DATA.isCurrentFilmLoadingStatus;

export const getReviews = ({[NameSpace.AppData]: APP_DATA}: State): Review[] => APP_DATA.reviews;
export const getIsReviewsLoadingStatus = ({[NameSpace.AppData]: APP_DATA}: State): boolean => APP_DATA.isReviewsLoadingStatus;

export const getSimilarFilms = ({[NameSpace.AppData]: APP_DATA}: State): Film[] => APP_DATA.similarFilms;
export const getIsSimilarFilmsLoadingStatus = ({[NameSpace.AppData]: APP_DATA}: State): boolean => APP_DATA.isSimilarFilmsLoadingStatus;

export const getGenres = ({[NameSpace.AppData]: APP_DATA}: State): string[] => APP_DATA.genres;


export const selectFilms = createSelector(
  [getFilms, getGenre, getShowingFilmsStep],
  (films, genre, showingFilmsStep) => {
    const filteredFilms = genre === 'All genres' ? films : films.filter((film) => film.genre === genre);
    const isAllFilmsShowing = showingFilmsStep * SHOWING_FILMS_PER_STEP >= filteredFilms.length;
    const showingFilms = filteredFilms.slice(0, showingFilmsStep * SHOWING_FILMS_PER_STEP);

    return {
      showingFilms: showingFilms,
      isAllFilmsShowing: isAllFilmsShowing,
    };
  }
);


