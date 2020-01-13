import * as types from '../actionTypes';

const initialState = {
  apiKey: '',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token ',
  },
  params: {
    filter: '',
  },
  repositories: [],
  selectedRepository: '',
  selectedUser: '',
  issues: [],
};

const gitHubApiReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default gitHubApiReducer;
