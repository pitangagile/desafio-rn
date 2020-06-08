export interface Movie {
  _id: string;
  name: string;
  url: string;
  description: string;
}

export interface State {
  data?: Array<Movie> | undefined;
  error?: Error | any;
  status?: string | any;
  page?: number;
}
