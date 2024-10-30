type RatingDescription = 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';

function getRatingDescription(rating: number): RatingDescription {
  if (rating < 0 || rating > 10) {
    throw new RangeError('Rating should be between 0 and 10');
  }

  const ratingRanges = new Map<number, RatingDescription>([
    [10, 'Awesome'],
    [8, 'Very good'],
    [5, 'Good'],
    [3, 'Normal'],
    [0, 'Bad']
  ]);

  for (const [threshold, description] of ratingRanges) {
    if (rating >= threshold) {
      return description;
    }
  }

  throw new Error('Unexpected rating value'); // На случай непредвиденных ошибок
}

const humanizeRunTime = (runTime: number): string => {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;
  return `${hours}h ${minutes}m`;
};

function formatStarringArrayToString(arr: string[]): string {
  if (arr.length <= 4) {
    return arr.join(', ');
  } else {
    return `${arr.slice(0, 4).join(', ')} and other`;
  }
}


export { getRatingDescription, humanizeRunTime, formatStarringArrayToString };
