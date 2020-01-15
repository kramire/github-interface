import * as types from './actionTypes';

export const requestRepositories = () => {
  return {
    type: types.REQUEST_REPOSITORIES,
  };
};

export const setRepositories = repositories => {
  return {
    type: types.SET_REPOSITORIES,
    data: repositories,
  };
};

export const receivedRepositories = () => {
  return {
    type: types.RECEIVED_REPOSITORIES,
  };
};

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
      .then(() => dispatch(receivedRepositories));
  };
};

export const requestIssues = () => {
  return {
    type: types.REQUEST_ISSUES,
  };
};

export const setIssues = issues => {
  return {
    type: types.SET_ISSUES,
    data: issues,
  };
};

export const receivedIssues = () => {
  return {
    type: types.RECEIVED_ISSUES,
  };
};

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

export const selectRepository = repoName => {
  return {
    type: types.SET_SELECTED_REPOSITORY,
    data: repoName,
  };
};

export const selectUser = userName => {
  return {
    type: types.SET_SELECTED_USER,
    data: userName,
  };
};

export const setApiKey = apiKey => {
  return {
    type: types.SET_API_KEY,
    data: apiKey,
  };
};

export const setAuthorizationHeader = apiKey => {
  return {
    type: types.SET_AUTHORIZATION_HEADER,
    data: apiKey,
  };
};
