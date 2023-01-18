import axios from 'axios';
import { useRoute } from 'vue-router';

const state = {
  user: null,
  mail: null,
};

const getters = {
  isAuthenticated: (state: { user: any; }) => !!state.user,    
  StateUser: (state: { user: any; }) => state.user,
  email: (state: {mail: any; }) => state.mail,
};

const actions = {
  async Register({dispatch}: any, form: { username: string | Blob; email: string | Blob; password: string | Blob; }) {
    await axios.post('signup', form)
    await dispatch('LogIn', form)
  },
  async LogIn({commit}: any, User: any) {
    await axios.post('signin', User)
    await commit('setUser', User.username)
    await commit('setMail', User.email)
  },
  async LogOut({commit}: any){
    const user = null
    commit('logout', user)
  },  
  async test(){
    await axios.get('api/test/all')
  }
};

const mutations = {
  setUser(state: { user: any; }, username: any){
    state.user = username
},
  setMail(state: { mail: any; }, email: any){
    state.mail = email
},
LogOut(state: { user: null, mail: null; }){
    state.user = null,
    state.mail = null
},  
};

export default {
  state,
  getters,
  actions,
  mutations
};