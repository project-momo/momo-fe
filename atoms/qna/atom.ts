import { atom } from 'recoil';
import { v1 } from 'uuid';

export interface QnaType {
   questionId: number;
   content: string;
   questioner: QuestionerType;
   createdAt: string;
   modifiedAt: string;
   answers: AnswerType[];
}

interface QuestionerType {
   userId: number;
   email: string;
   nickname: string;
   imageUrl: null;
}

interface AnswerType {
   answerId: number;
   content: string;
   answerer: AnswererType;
   createdAt: string;
   modifiedAt: string;
}

interface AnswererType {
   userId: number;
   email: string;
   nickname: string;
   imageUrl: null;
}

export const qnaListState = atom<QnaType[]>({ key: `qnaState/${v1()}`, default: [] });
