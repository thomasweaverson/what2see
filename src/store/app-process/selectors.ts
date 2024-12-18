import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getGenre = ({[NameSpace.AppProcess]: APP_PROCESS}: State): string => APP_PROCESS.genre;

export const getShowingFilmsStep = ({[NameSpace.AppProcess]: APP_PROCESS}: State): number => APP_PROCESS.showingFilmsStep;

export const getError = ({[NameSpace.AppProcess]: APP_PROCESS}: State): string | null => APP_PROCESS.error;
