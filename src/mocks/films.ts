import type { Film } from '../types/film';

const FILMS: Film[] = [
  {
    'name': 'A Star Is Born',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/A_Star_Is_Born.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/A_Star_Is_Born.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/A_Star_is_Born.jpg',
    'backgroundColor': '#C4C0C0',
    'description': 'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',
    'rating': 3.9,
    'scoresCount': 244484,
    'director': 'Bradley Cooper',
    'starring': [
      'Lady Gaga',
      'Bradley Cooper',
      'Sam Elliott'
    ],
    'runTime': 136,
    'genre': 'Drama',
    'released': 2018,
    'id': 18,
    'isFavorite': false,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/traffic.mp4'
  },
  {
    'name': 'Moonrise Kingdom',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/Moonrise_Kingdom.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/moonrise-kingdom.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/Moonrise_Kingdom.jpg',
    'backgroundColor': '#D8E3E5',
    'description': 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    'rating': 7.9,
    'scoresCount': 291183,
    'director': 'Wes Anderson',
    'starring': [
      'Jared Gilman',
      'Kara Hayward',
      'Bruce Willis'
    ],
    'runTime': 94,
    'genre': 'Adventure',
    'released': 2012,
    'id': 19,
    'isFavorite': false,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/matrix.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/dog.mp4'
  },
  {
    'name': 'Gangs of new york',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/Gangs_of_New_York_Poster.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/gangs_of_new_york.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/gangs_of_new_york.jpg',
    'backgroundColor': '#A6B7AC',
    'description': 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    'rating': 8.8,
    'scoresCount': 370881,
    'director': 'Martin Scorsese',
    'starring': [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    'runTime': 167,
    'genre': 'Crime',
    'released': 2002,
    'id': 20,
    'isFavorite': true,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/traffic.mp4'
  },
  {
    'name': 'Johnny English',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/Johnny_English.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/johnny-english.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/Johnny_English.jpg',
    'backgroundColor': '#F0DBA2',
    'description': 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
    'rating': 10,
    'scoresCount': 136843,
    'director': 'Peter Howitt',
    'starring': [
      'Rowan Atkinson',
      'John Malkovich',
      'Natalie Imbruglia'
    ],
    'runTime': 88,
    'genre': 'Comedy',
    'released': 2003,
    'id': 21,
    'isFavorite': true,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/traffic.mp4'
  },
  {
    'name': 'We need to talk about Kevin',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/We_need_to_talk_about_Kevin.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/we-need-to-talk-about-kevin.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/We_need_to_talk_about_Kevin.jpg',
    'backgroundColor': '#E1DFDE',
    'description': 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    'rating': 3.8,
    'scoresCount': 123240,
    'director': 'Lynne Ramsay',
    'starring': [
      'Tilda Swinton',
      'John C. Reilly',
      'Ezra Miller'
    ],
    'runTime': 112,
    'genre': 'Drama',
    'released': 2011,
    'id': 22,
    'isFavorite': false,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/traffic.mp4'
  },
  {
    'name': 'Snatch',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/Snatch.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/snatch.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/Snatch.jpg',
    'backgroundColor': '#FDFDFC',
    'description': 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    'rating': 0.2,
    'scoresCount': 716577,
    'director': 'Guy Ritchie',
    'starring': [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    'runTime': 104,
    'genre': 'Comedy',
    'released': 2000,
    'id': 23,
    'isFavorite': true,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/bike.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/dog.mp4'
  },
  {
    'name': 'Macbeth',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/Macbeth.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/macbeth.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/Macbeth.jpg',
    'backgroundColor': '#F1E9CE',
    'description': 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    'rating': 3.3,
    'scoresCount': 48798,
    'director': 'Justin Kurzel',
    'starring': [
      'Michael Fassbender',
      'Marion Cotillard',
      'Jack Madigan'
    ],
    'runTime': 113,
    'genre': 'Drama',
    'released': 2015,
    'id': 24,
    'isFavorite': false,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/matrix.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/dog.mp4'
  },
  {
    'name': 'Orlando',
    'posterImage': 'https://10.react.htmlacademy.pro/static/film/poster/Orlando.jpg',
    'previewImage': 'https://10.react.htmlacademy.pro/static/film/preview/orlando.jpg',
    'backgroundImage': 'https://10.react.htmlacademy.pro/static/film/background/Orlando.jpg',
    'backgroundColor': '#D8D3BD',
    'description': 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
    'rating': 2.6,
    'scoresCount': 12292,
    'director': 'Sally Potter',
    'starring': [
      'Tilda Swinton',
      'Billy Zane',
      'Quentin Crisp'
    ],
    'runTime': 94,
    'genre': 'Drama',
    'released': 1992,
    'id': 25,
    'isFavorite': false,
    'videoLink': 'https://10.react.htmlacademy.pro/static/film/video/matrix.mp4',
    'previewVideoLink': 'https://10.react.htmlacademy.pro/static/film/video/traffic.mp4'
  }
];

export default FILMS;