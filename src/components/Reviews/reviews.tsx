import { splitArray } from '../../utils/reviews-utils';
import type { Review as ReviewType } from '../../types/types';
import Review from '../review/review';

type ReviewsProps = {
  reviews: ReviewType[];
}
function Reviews({reviews}: ReviewsProps): JSX.Element {
  const [firstCol, secondCol] = splitArray(reviews);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstCol.map((review) => (
          <Review
            key={review.id}
            comment={review.comment}
            date={review.date}
            id={review.id}
            rating={review.rating}
            user={review.user}
          />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondCol.map((review) =>(
          <Review
            key={review.id}
            comment={review.comment}
            date={review.date}
            id={review.id}
            rating={review.rating}
            user={review.user}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
