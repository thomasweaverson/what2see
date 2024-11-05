import type {Film} from '../../types/film';

import FilmsList from '../films-list/films-list';

type MoreLikeThisProps = {
  films: Pick<Film, 'name' | 'id' | 'previewImage' | 'previewVideoLink'>[];
}

function MoreLikeThis({films}: MoreLikeThisProps) {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={films} />
    </section>
  );
}

export default MoreLikeThis;
