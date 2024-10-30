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

export {AppRoute, AuthorizationStatus};
