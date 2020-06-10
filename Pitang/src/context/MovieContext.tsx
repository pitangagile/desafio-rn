import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { State } from '../typings';
import MovieService from '../service';

const NOT_FOUND_IMAGE_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR09guUyR_k0wk-evy8vBO14xaxirHrnrCbNye4uXRDpHa6_Y5K&usqp=CAU';

const STATUS = {
  START: 'start',
  IDLE: 'idle',
  SUCCESS: 'success',
  REJECTED: 'rejected',
};

const TYPES = {
  SUCCESS: '@movies/SUCCESS',
  ERROR: '@movies/ERROR',
  START: '@movies/START',
  SET_PAGE: '@movies/SET_PAGE',
};

interface IMovieContext {
  state: State;
  loadMovies(): void;
  dispatch: any;
  isLoading: boolean;
  hasError: boolean;
  NOT_FOUND_IMAGE_URL: string;
}

const MovieContext = createContext<IMovieContext>({} as IMovieContext);

const INITIAL_STATE: State = {
  data: [],
  error: null,
  page: 0,
  status: 'idle',
};

const movieReducer = (state: State, action: any): State => {
  switch (action.type) {
    case TYPES.START:
      return { ...state, status: STATUS.START };
    case TYPES.SUCCESS:
      return {
        ...state,
        status: STATUS.SUCCESS,
        //@ts-ignore
        data: state.data.concat(action.data),
        page: action.page,
      };
    case TYPES.ERROR:
      return {
        ...state,
        status: STATUS.REJECTED,
        error: action.error,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

type Props = {
  children: React.ReactNode;
};

export const MovieProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      dispatch({ type: TYPES.START });
      const data = await MovieService.list(state.page, 6);
      //@ts-ignore
      dispatch({ type: TYPES.SUCCESS, data, page: state.page + 1 });
    } catch (error) {
      dispatch({ type: TYPES.ERROR, error });
    }
  }

  const isLoading = useMemo(
    //@ts-ignore
    () => state.status === STATUS.START && state.data.length === 0,
    [state.status, state.data],
  );

  const hasError = state.status === STATUS.REJECTED;

  return (
    <MovieContext.Provider
      value={{
        state,
        dispatch,
        loadMovies,
        isLoading,
        hasError,
        NOT_FOUND_IMAGE_URL,
      }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
