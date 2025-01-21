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
  Promo = '/promo',
  Favorite = '/favorite',
}

enum NameSpace {
  AppData = 'APP_DATA',
  AppProcess = 'APP_PROCESS',
  UserProcess = 'USER_PROCESS',
}

enum HttpCode {
  NotFound = 404,
  NoAuth = 401
}

const DEFAULT_PROMO_FILM = {

  'id': 1,
  'name': 'The Grand Budapest Hotel',
  'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
  'previewImage': 'img/the-grand-budapest-hotel.jpg',
  'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
  'backgroundColor': '#ffffff',
  'videoLink': 'https://some-link',
  'previewVideoLink': 'https://some-link',
  'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  'rating': 8.9,
  'scoresCount': 240,
  'director': 'Wes Anderson',
  'starring': [
    'Bill Murray'
  ],
  'runTime': 99,
  'genre': 'Comedy',
  'released': 2014,
  'isFavorite': false

};

export {AppRoute, AuthorizationStatus, SHOWING_FILMS_PER_STEP, TIMEOUT_SHOW_ERROR, APIRoute, NameSpace, HttpCode, DEFAULT_PROMO_FILM};
