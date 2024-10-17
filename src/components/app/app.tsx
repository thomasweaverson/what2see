import Main from '../main/main';

type PromoMovieInfo = {
  title: string;
  genre: string;
  year: number;
}

type AppProps = {
  promoMovie: PromoMovieInfo;
}

function App({promoMovie}: AppProps): JSX.Element {
  return (
    <Main promoMovie={promoMovie}/>
  );
}

export default App;
