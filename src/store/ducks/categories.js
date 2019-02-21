export const Types = {
  GET_CATEGORIES_REQUEST: 'repositories/GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'repositories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'repositories/GET_CATEGORIES_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  error: null,
  success: null,
  loading: false,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case Types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: 'Categorias consultadas com sucesso',
        data: [...state.data, action.payload.categories],
      };
    case Types.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        error: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  getCategoryRequest: () => ({
    type: Types.GET_CATEGORIES_REQUEST,
    payload: {},
  }),

  getCategorySuccess: data => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: {
      data,
    },
  }),

  getCategoryFailure: message => ({
    type: Types.GET_CATEGORIES_FAILURE,
    payload: {
      message,
    },
  }),
};
