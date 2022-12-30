import { atom } from 'recoil';

export const nameState = atom<number>({
   key: 'nameState',
   default: 1
});

export const mainTagList = atom<string[]>({
   key: 'mainTagList',
   default: []
});

export const isLogin = atom<boolean>({
   key: 'isLogin',
   default: false
});
