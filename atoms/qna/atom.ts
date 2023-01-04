import { atom } from 'recoil';
import { QnaType } from '../../components/detail/QnaList';

export const qnaState = atom<QnaType[]>({ key: 'qnaState', default: [] });
