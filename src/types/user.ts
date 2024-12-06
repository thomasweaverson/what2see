type UserInfo = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
}

type UserReview = {
  comment: string;
  rating: number;
  filmId: number;
}

export type {UserInfo, UserReview};
