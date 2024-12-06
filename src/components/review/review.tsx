import type { Review as ReviewType } from '../../types/types';

import { formatDate } from '../../utils/common-utils';

function Review({comment, date, id, rating, user}: ReviewType): JSX.Element {
  const {dateTime, displayDate} = formatDate(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dateTime}>{displayDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
