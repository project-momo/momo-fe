import { atom } from 'recoil';
import { v1 } from 'uuid';

export const nameState = atom<number>({
   key: `nameState/${v1()}`,
   default: 1
});

export const mainTagListmain = atom<string>({
   key: `mainTagList/${v1()}`,
   default: ''
});
export const mainTagList = atom<string[]>({
   key: `mainTagList/${v1()}`,
   default: []
});

export const isLogin = atom<boolean>({
   key: `isLogin/${v1()}`,
   default: false
});

export const selectCategory = atom<string>({
   key: `selectCategory/${v1()}`,
   default: ''
});

export const mainSearchText = atom<string>({
   key: `mainSearchText/${v1()}`,
   default: ''
});
export const nowSearchText = atom<string>({
   key: `nowSearchText/${v1()}`,
   default: ''
});
export const setMoimDataArray = atom<any>({
   key: `setMoimDataArray/${v1()}`,
   default: []
});

export const searchValueAtom = atom<any>({
   key: `searchValueAtom/${v1()}`,
   default: ''
});
