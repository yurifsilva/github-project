const UPDATE_USERS = (state, Users) => {
  state.Users = Users;
};

const UPDATE_REPOSITORIES = (state, Repositories) => {
  state.Repositories = Repositories;
};

const UPDATE_COMMITS = (state, Commits) => {
  state.Commits = Commits;
};

export default {
  UPDATE_USERS,
  UPDATE_REPOSITORIES,
  UPDATE_COMMITS
};
