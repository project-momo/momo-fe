import { atom } from 'recoil';

export const setIsShareModalOpen = atom<boolean>({
   key: 'setIsShareModalOpen',
   default: false
});
