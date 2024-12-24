import {useNavigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/action';
import { getAuthorizationStatus, getUserInfo } from '../../store/user-process/selectors';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userInfo = useAppSelector(getUserInfo);
  const handleSignInOutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    //@thws vVv эт неправильно
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logout());
      setTimeout(() => navigate(AppRoute.Main), 50);
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  const handleAvatarClick = () => {
    navigate(AppRoute.MyList);
  };

  return (
    <ul className="user-block">

      {userInfo && authorizationStatus === AuthorizationStatus.Auth &&
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={handleAvatarClick}>
          <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>}

      <li className="user-block__item">
        <a className="user-block__link" href="/" onClick={handleSignInOutClick}>{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</a>
      </li>

    </ul>
  );
}

export default UserBlock;
