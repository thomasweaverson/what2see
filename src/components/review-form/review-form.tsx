import { useState, Fragment } from 'react';
import type {ChangeEvent} from 'react';
import { sendReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentMovieId = useAppSelector((state) => state.currentFilm?.id);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isSubmitDisabled && !isSubmitting) {
      setIsSubmitting(true);
      const isSentSuccesfully = await dispatch(sendReviewAction({comment, rating, filmId: currentMovieId})).unwrap();
      if (isSentSuccesfully) {
        setComment('');
        setRating(null);
        navigate(`${AppRoute.Films}/${currentMovieId}`);
      }
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = rating === null || comment.length < 50 || comment.length > 400 || !currentMovieId;

  return (
    <form action="#" className="add-review__form" onSubmit={(event) => {void handleSubmit(event);}}>
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
