import * as types from './actionTypes';

// Actions returning objects
export const requestRepositories = () => ({
  type: types.REQUEST_REPOSITORIES,
});

export const setRepositories = repositories => ({
  type: types.SET_REPOSITORIES,
  data: repositories,
});

export const receivedRepositories = () => ({
  type: types.RECEIVED_REPOSITORIES,
});

export const requestIssues = () => ({
  type: types.REQUEST_ISSUES,
});

export const setIssues = issues => ({
  type: types.SET_ISSUES,
  data: issues,
});

export const receivedIssues = () => ({
  type: types.RECEIVED_ISSUES,
});

export const selectRepository = repoName => ({
  type: types.SET_SELECTED_REPOSITORY,
  data: repoName,
});

export const selectUser = userName => ({
  type: types.SET_SELECTED_USER,
  data: userName,
});

export const setApiKey = apiKey => ({
  type: types.SET_API_KEY,
  data: apiKey,
});

export const setAuthorizationHeader = apiKey => ({
  type: types.SET_AUTHORIZATION_HEADER,
  data: apiKey,
});

export const setFilterParam = filter => ({
  type: types.SET_FILTER_PARAM,
  data: filter,
});

// Action Creators
// GET request for repo data. Return desired data points.
export const getRepositories = () => {
  return (dispatch, getState) => {
    const { headers } = getState();
    dispatch(requestRepositories());
    return fetch('https://api.github.com/user/repos', {
      headers,
    })
      .then(res => res.json())
      .then(data => data.map(item => {
        return {
          id: item.id,
          name: item.name,
          full_name: item.full_name,
          owner: {
            login: item.owner.login,
            id: item.owner.id,
          },
          html_url: item.html_url,
          description: item.description,
        };
      }))
      .then(repos => dispatch(setRepositories(repos)))
      .then(() => dispatch(receivedRepositories()));
  };
};

// GET request for issues data. Return desired data points.
export const getIssues = () => {
  return (dispatch, getState) => {
    dispatch(requestIssues());
    const { headers, issues } = getState();
    const { selectedRepository, selectedUser, filter } = issues;
    return fetch(`https://api.github.com/repos/${selectedUser}/${selectedRepository}/issues?filter=${filter}`, {
      headers,
    })
      .then(res => res.json())
      .then(data => data.map(item => {
        return {
          id: item.id,
          title: item.title,
          user: {
            id: item.user.id,
            avatar_url: item.user.avatar_url,
          },
          'created_at': item.created_at,
          'updated_at': item.updated_at,
        };
      }))
      .then(items => dispatch(setIssues(items)))
      .then(() => dispatch(receivedIssues));
  };
};
