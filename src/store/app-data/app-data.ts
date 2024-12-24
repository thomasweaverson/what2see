import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace, DEFAULT_PROMO_FILM } from '../../const';
import { fetchFilms, fetchFilm, fetchSimilarFilms, fetchReviews, sendReview, fetchPromoFilm, fetchFavoriteFilms, postFavoriteFilm, logout } from '../action';
import { executeGenres } from '../../utils/filter-utils';


const initialState: AppData = {
  films: [],
  isFilmsLoadingStatus: false,
  currentFilm: null,
  isCurrentFilmLoadingStatus: false,
  promoFilm: null,
  isPromoFilmLoadingStatus: false,
  reviews: [],
  isReviewsLoadingStatus: false,
  similarFilms: [],
  isSimilarFilmsLoadingStatus: false,
  favoriteFilms: [],
  isFavoriteFilmsLoadingStatus: false,
  favoriteFilmsCount: 0,
  genres: ['All genres'],
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    resetCurrentFilm: (state) => {
      state.currentFilm = null;
    },
    setGenres: (state, action: PayloadAction<string[]>) => {
      state.genres = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoadingStatus = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoadingStatus = false;
        state.genres = executeGenres(action.payload);
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isFilmsLoadingStatus = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isCurrentFilmLoadingStatus = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isCurrentFilmLoadingStatus = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.isCurrentFilmLoadingStatus = false;
      })
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isPromoFilmLoadingStatus = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoadingStatus = false;
      })
      .addCase(fetchPromoFilm.rejected, (state) => {
        state.isPromoFilmLoadingStatus = false;
        state.promoFilm = DEFAULT_PROMO_FILM;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isSimilarFilmsLoadingStatus = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsLoadingStatus = false;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.isSimilarFilmsLoadingStatus = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoadingStatus = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoadingStatus = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.isReviewsLoadingStatus = false;
      })
      .addCase(sendReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.isFavoriteFilmsLoadingStatus = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsLoadingStatus = false;
        state.favoriteFilmsCount = action.payload.length;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.isFavoriteFilmsLoadingStatus = false;
      })
      .addCase(postFavoriteFilm.fulfilled, (state, action) => {
        const updatedFilm = action.payload;
        state.films = state.films.map((film) => {
          if (film.id === updatedFilm.id) {
            return updatedFilm;
          }
          return film;
        });

        if (state.currentFilm?.id === updatedFilm.id) {
          state.currentFilm = updatedFilm;
        }

        if (state.promoFilm?.id === updatedFilm.id) {
          state.promoFilm = updatedFilm;
        }

        if (updatedFilm.isFavorite) {
          state.favoriteFilms = [...state.favoriteFilms, updatedFilm];
        } else {
          state.favoriteFilms = state.favoriteFilms.filter((film) => film.id !== updatedFilm.id);
        }
        state.favoriteFilmsCount = state.favoriteFilms.length;
      })
      .addCase(logout.fulfilled, (state) => {
        state.favoriteFilms = [];
        state.films = state.films.map((film) => ({...film, isFavorite: false}));
        if (state.promoFilm?.isFavorite) {
          state.promoFilm = {...state.promoFilm, isFavorite: false};
        }
        state.favoriteFilmsCount = 0;
      });
  }
});

export const {resetCurrentFilm} = appData.actions;
