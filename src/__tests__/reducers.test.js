/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
import gitHubApiReducer from '../redux/reducers';
import * as types from '../redux/actionTypes';
import testRepoData from '../testRepoData.json';
import testIssueData from '../testIssueData.json';

describe('Reducers Testing', () => {
  describe('Set GitHub API Call Headers and Params', () => {
    it('SET_API_KEY --> should update the apiKey given the passed string', () => {
      // ARRANGE
      const initialState = {
        apiKey: '',
      };
      const action = {
        type: types.SET_API_KEY,
        data: '1234567890',
      };
  
      const expectedState = {
        apiKey: '1234567890',
      };
  
      // ACT
      const newState = gitHubApiReducer(initialState, action);
  
      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('SET_AUTHORIZATION_HEADER --> should update the authorization header with the api key', () => {
      // ARRANGE
      const initialState = {
        headers: {
          Authorization: '',
        },
      };
      const action = {
        type: types.SET_AUTHORIZATION_HEADER,
        data: '1234567890',
      };

      const expectedState = {
        headers: {
          Authorization: 'token 1234567890',
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('SET_SELECTED_REPOSITORY --> should update the selected repository for the issues list', () => {
      // ARRANGE
      const initialState = {
        issues: {
          selectedRepository: '',
        },
      };
      const action = {
        type: types.SET_SELECTED_REPOSITORY,
        data: 'testRepo',
      };

      const expectedState = {
        issues: {
          selectedRepository: 'testRepo',
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('SET_SELECTED_USER --> should update the selected repository for the issues list', () => {
      // ARRANGE
      const initialState = {
        issues: {
          selectedUser: '',
        },
      };
      const action = {
        type: types.SET_SELECTED_USER,
        data: 'testUser',
      };

      const expectedState = {
        issues: {
          selectedUser: 'testUser',
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('SET_FILTER_PARAM --> should update the filter parameter given user selection', () => {
      // ARRANGE
      const initialState = {
        issues: {
          filter: '',
        },
      };
      const action = {
        type: types.SET_FILTER_PARAM,
        data: 'mentioned',
      };

      const expectedState = {
        issues: {
          filter: 'mentioned',
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
  });
  describe('GitHub API call to get repositories', () => {
    it('REQUEST_REPOSITORIES --> updates repositories isFetching property to true', () => {
      // ARRANGE
      const initialState = {
        repositories: {
          isFetching: false,
        },
      };
      const action = {
        type: types.REQUEST_REPOSITORIES,
      };
      const expectedState = {
        repositories: {
          isFetching: true,
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('SET_REPOSITORIES --> updates repositories items with response data', () => {
      // ARRANGE
      const initialState = {
        repositories: {
          isFetching: true,
          items: [],
        },
      };
      const action = {
        type: types.SET_REPOSITORIES,
        data: testRepoData,
      };
      const expectedState = {
        repositories: {
          isFetching: true,
          items: testRepoData,
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('RECEIVED_REPOSITORIES --> updates repositories isFetching property to false', () => {
      // ARRANGE
      const initialState = {
        repositories: {
          isFetching: true,
        },
      };
      const action = {
        type: types.RECEIVED_REPOSITORIES,
      };
      const expectedState = {
        repositories: {
          isFetching: false,
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
  });
  describe('GitHub API call to get issues', () => {
    it('REQUEST_ISSUES --> updates issues isFetching property to true', () => {
      // ARRANGE
      const initialState = {
        issues: {
          isFetching: false,
        },
      };
      const action = {
        type: types.REQUEST_ISSUES,
      };
      const expectedState = {
        issues: {
          isFetching: true,
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('SET_ISSUES --> updates issues items with response data', () => {
      // ARRANGE
      const initialState = {
        issues: {
          isFetching: true,
          items: [],
        },
      };
      const action = {
        type: types.SET_ISSUES,
        data: testIssueData,
      };
      const expectedState = {
        issues: {
          isFetching: true,
          items: testIssueData,
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
    it('RECEIVED_ISSUES --> updates issues isFetching property to false', () => {
      // ARRANGE
      const initialState = {
        issues: {
          isFetching: true,
        },
      };
      const action = {
        type: types.RECEIVED_ISSUES,
      };
      const expectedState = {
        issues: {
          isFetching: false,
        },
      };

      // ACT
      const newState = gitHubApiReducer(initialState, action);

      // ASSERT
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(newState);
    });
  });
});
