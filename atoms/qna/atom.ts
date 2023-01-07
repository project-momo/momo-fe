import { atom } from 'recoil';
import { QnaType } from '../../components/detail/QnaList';

export const qnaListState = atom<QnaType[]>({ key: 'qnaState', default: [] });
