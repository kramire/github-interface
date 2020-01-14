/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../redux/actions';
import * as types from '../redux/actionTypes';
import testRepoData from '../testRepoData.json';
import testIssueData from '../testIssueData.json';

describe('Actions Testing', () => {
  describe('Async action creators for GitHub API calls', () => {
    let middleware;
    let mockStore;

    beforeEach(() => {
      middleware = [thunk];
      mockStore = configureMockStore(middleware);
    });

    afterEach(() => {
      fetchMock.restore();
    });

    test('getRepositories --> dispatches actions to request, set, and received repos', () => {
      // ARRANGE
      const store = mockStore({ repositories: [] });
      const expectedActions = [
        {
          type: types.REQUEST_REPOSITORIES,
        },
        {
          type: types.SET_REPOSITORIES,
          data: testRepoData,
        },
        {
          type: types.RECEIVED_REPOSITORIES,
        },
      ];
      const getReposUrl = 'https://api.github.com/user/repos';
      fetchMock.getOnce(getReposUrl, {
        body: testRepoData,
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': 'token ',
        },
      });

      // ACT & ASSERT
      return store.dispatch(actions.getRepositories()).then(() => {
        const actionsHistory = store.getActions();
        const newStore = store.getState();
        expect(actionsHistory).toEqual(expectedActions);
        expect(newStore.repositories.length).toBeGreaterThan(0);
      });
    });

    test('getIssues --> dispatches actions to request, set, and received issues', () => {
      // ARRANGE
      const store = mockStore({
        issues: {
          selectedRepository: 'repoName',
          selectedUser: 'userName',
          filter: 'filterParam',
          items: [],
        },
      });
      const expectedActions = [
        {
          type: types.REQUEST_ISSUES,
        },
        {
          type: types.SET_ISSUES,
          data: testIssueData,
        },
        {
          type: types.RECEIVED_ISSUES,
        },
      ];
      const baseUrl = 'https://api.github.com/repos/';
      const getIssuesUrl = `${baseUrl}${store.issues.selectedUser}/${store.issues.selectedRepository}/issues?filter=${store.issues.filter}`;
      fetchMock.getOnce(getIssuesUrl, {
        body: testIssueData,
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': 'token ',
        },
      });

      // ACT & ASSERT
      return store.dispatch(actions.getIssues()).then(() => {
        const actionsHistory = store.getActions();
        const newStore = store.getState();
        expect(actionsHistory).toEqual(expectedActions);
        expect(newStore.issues.length).toBeGreaterThan(0);
      });
    });
  });
  describe('Update selections / parameters for filter selection', () => {
    it('selectRepository ---> should create an action passing the selected repository', () => {
      // ARRANGE
      const repoName = 'testRepo';
      const expectedAction = { type: types.SET_SELECTED_REPOSITORY, data: repoName };

      // ACT
      const newAction = actions.selectRepository(repoName);

      // ASSERT
      expect(newAction).toEqual(expectedAction);
    });
    it('selectUser ---> should create an action passing the user per the selected repository', () => {
      // ARRANGE
      const userName = 'testUser';
      const expectedAction = { type: types.SET_SELECTED_USER, data: userName };

      // ACT
      const newAction = actions.selectUser(userName);

      // ASSERT
      expect(newAction).toEqual(expectedAction);
    });
  });
});
