const FETCH_FILMS = "FETCH_FILMS";
const FETCH_FILMS_SUCCES = "FETCH_FILMS_SUCCES";
const FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR";

interface FilmState {
  films: any[];
  loading: boolean;
  error: null | string;
}

interface FilmAction {
  type: string;
  payload?: any;
}

const initialState: FilmState = {
  films: [],
  loading: false,
  error: null,
};

export const firtsReduser = (
  state = initialState,
  action: FilmAction
): FilmState => {
  switch (action.type) {
    case FETCH_FILMS:
      return { loading: true, error: null, films: [] };
    case FETCH_FILMS_SUCCES:
      return { loading: false, error: null, films: action.payload };
    case FETCH_FILMS_ERROR:
      return { loading: false, error: action.payload, films: [] };
    default:
      return state;
  }
};
