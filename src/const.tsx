enum AppRoute {
  Main = '/',
  MyList = '/mylist',
  Films = '/films',
  Player = '/player',
  SignIn = '/login',
  AddReview = '/review',
  NotFound = '*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SHOWING_FILMS_PER_STEP = 8;

const TIMEOUT_SHOW_ERROR = 5000;

enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  // Favorites = '/favorites',
}

enum NameSpace {
  AppData = 'APP_DATA',
  AppProcess = 'APP_PROCESS',
  UserProcess = 'USER_PROCESS',
}

enum HttpCode {
  NotFound = 404
}

export {AppRoute, AuthorizationStatus, SHOWING_FILMS_PER_STEP, TIMEOUT_SHOW_ERROR, APIRoute, NameSpace, HttpCode};
