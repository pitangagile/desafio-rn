import React, { createContext, useReducer, useEffect } from 'react';
import { Movie } from 'src/typings';
import MovieService from '../service';

const STATUS = {
  START: 'start',
  IDLE: 'idle',
  SUCCESS: 'success',
  REJECTED: 'rejected',
};

const ACTIONS = {
  SUCCESS: '@movies/SUCCESS',
  ERROR: '@movies/ERROR',
  START: '@movies/START',
};

interface State {
  data?: Array<Movie>;
  error?: Error | any;
  status?: string | any;
}

interface Action extends State {
  type: string | any;
}

const MovieContext = createContext<State>({} as State);

const INITIAL_STATE: State = {
  data: [],
  error: null,
  status: 'idle',
};

const movieReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, status: STATUS.START };
    case ACTIONS.SUCCESS:
      return { ...state, status: STATUS.SUCCESS, data: action.data };
    case ACTIONS.ERROR:
      return { ...state, status: STATUS.REJECTED, error: action.error };
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
      dispatch({ type: ACTIONS.START });
      const data = await MovieService.movies();
      dispatch({ type: ACTIONS.SUCCESS, data });
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error });
    }
  }

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
