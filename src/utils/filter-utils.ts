import type { Film } from '../types/types';

const filterFilmsByGenre = (films: Film[], genre: string) => (genre === 'All genres') ? films : films.filter((film) => film.genre === genre);

const getGenres = (films: Film[]): string[] => ['All genres', ...new Set(films.map((film) => film.genre))].slice(0, 9);

export { filterFilmsByGenre, getGenres };
