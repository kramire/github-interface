import * as types from '../actionTypes';

const initialState = {
  apiKey: '',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: '',
  },
  repositories: {
    isFetching: false,
    items: [],
  },
  issues: {
    isFetching: false,
    selectedRepository: '',
    selectedUser: '',
    items: [],
    filter: '',
  },
};

const gitHubApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_API_KEY:
      return {
        ...state,
        apiKey: action.data,
      };
    case types.SET_AUTHORIZATION_HEADER:
      return {
        ...state,
        headers: {
          ...state.headers,
          Authorization: `token ${action.data}`,
        },
      };
    case types.SET_FILTER_PARAM:
      return {
        ...state,
        issues: {
          ...state.issues,
          filter: action.data,
        },
      };
    case types.REQUEST_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          isFetching: true,
        },
      };
    case types.SET_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          items: action.data,
        },
      };
    case types.RECEIVED_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          isFetching: false,
        },
      };
    case types.REQUEST_ISSUES:
      return {
        ...state,
        issues: {
          ...state.issues,
          isFetching: true,
        },
      };
    case types.SET_ISSUES:
      return {
        ...state,
        issues: {
          ...state.issues,
          items: action.data,
        },
      };
    case types.RECEIVED_ISSUES:
      return {
        ...state,
        issues: {
          ...state.issues,
          isFetching: false,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default gitHubApiReducer;
