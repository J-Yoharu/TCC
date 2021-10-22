export default {
  setUser(state, user) {
    state.user = user;

    localStorage.setItem('user', JSON.stringify(user));
  },

  setReenderUser(state) {
    state.render += 1;
  },

  removeUser(state) {
    state.user = null;

    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },
};
