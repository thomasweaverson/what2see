import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user';


export const getAuthorizationStatus = ({[NameSpace.UserProcess]: USER_PROCESS}: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;

export const getUserInfo = ({[NameSpace.UserProcess]: USER_PROCESS}: State): UserInfo | null => USER_PROCESS.userInfo;
