import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/Agent';
import { User, UserFormValues } from '../models/user';
import { router } from '../router/Routes';
import { store } from './store';

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (cred: UserFormValues) => {
    try {
      const user = await agent.Account.login(cred);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      router.navigate('/activities');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  async register(cred: UserFormValues) {
    try {
      const user = await agent.Account.register(cred);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      router.navigate('/activities');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  }

  logout = () => {
    store.commonStore.setToken(null);
    this.user = null;
    router.navigate('/');
  };

  async getUser() {
    try {
      const user = await agent.Account.current();
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  }
}
