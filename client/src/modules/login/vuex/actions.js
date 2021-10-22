import { login, csrfCookie } from "@/modules/login/repositories/userRepository.js";

export default {
  async login(ctx, credentials) {
    await csrfCookie();

    return login(credentials).then((response) => {
      ctx.commit('setUser', response.data.user);
      localStorage.token = response.data.token;
      return response;
    }).catch((err)=>{
      return err.response.data;
    });
  },

  async signOut(ctx) {
    ctx.commit('removeUser');
  },
};
