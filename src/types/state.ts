import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Film, Review } from './types';
import { UserInfo } from './user';

export type AppData = {
  films: Film[];
  isFilmsLoadingStatus: boolean;
  currentFilm: Film | null;
  isCurrentFilmLoadingStatus: boolean;
  reviews: Review[];
  isReviewsLoadingStatus: boolean;
  similarFilms: Film[];
  isSimilarFilmsLoadingStatus: boolean;
  genres: string[];
}

export type AppProcess = {
  genre: string;
  showingFilmsStep: number;
  error: string | null;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfo | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
