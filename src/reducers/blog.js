const defaultState = {
  loading: false,
  posts: [],
  error: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'BLOG:FETCH_ALL':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'BLOG:RECIEVE_ALL':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        posts: action.posts,
      };
    case 'BLOG:FAIL_FETCH':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
