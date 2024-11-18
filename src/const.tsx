enum AppRoute {
  Main = '/',
  MyList = '/mylist',
  Films = '/films',
  Player = '/player',
  SignIn = '/login',
  AddReview = '/review',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SHOWING_FILMS_PER_STEP = 8;

export {AppRoute, AuthorizationStatus, SHOWING_FILMS_PER_STEP};
