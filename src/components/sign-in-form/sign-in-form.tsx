import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import type { AuthData } from '../../types/auth-data';
import { AppRoute } from '../../const';

function SignInForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginRef.current && passwordRef.current) {
      const authData: AuthData = {
        email: loginRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(loginAction(authData));
      navigate(AppRoute.Main);
    }
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="sign-in__form"
    >
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            ref={loginRef}
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            ref={passwordRef}
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}

export default SignInForm;
