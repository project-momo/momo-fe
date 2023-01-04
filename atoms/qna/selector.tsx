import { selector } from 'recoil';
import { qnaListState } from './atom';

export const qnaListLengthState = selector({
   key: 'qnaListLengthState',
   get: ({ get }) => {
      const qnaList = get(qnaListState);
      return qnaList.length;
   }
});
