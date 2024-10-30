import { useState, Fragment } from 'react';
import type {ChangeEvent} from 'react';

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log({
      rating,
      comment,
    });
  };

  const isSubmitDisabled = rating === null || comment.length < 50;

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((star) => (
            <Fragment key={`star ${star}`}>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={star}
                checked={rating === star}
                onChange={handleInputChange}
              />
              <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleTextAreaChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
