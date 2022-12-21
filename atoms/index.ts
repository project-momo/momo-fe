import { atom } from 'recoil';

export const nameState = atom<number>({
  key: 'nameState',
  default: 1,
});
