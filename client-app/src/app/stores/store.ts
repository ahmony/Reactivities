import { useContext, createContext } from 'react';
import ActivityStore from './ActivityStore';
import CommonStore from './CommonStore';
import ModalStore from './ModalStore';
import UserStore from './UserStore';

interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
  userStore: UserStore;
  modalStore: ModalStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
