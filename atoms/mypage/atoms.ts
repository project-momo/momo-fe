import { atom } from 'recoil';

interface MyProfileType {
   nickname: string;
   email: string;
   phoneNum: string;
   point: number;
}

export const myProfile = atom<MyProfileType>({
   key: 'myProfile',
   default: {
      nickname: '',
      email: '',
      phoneNum: '',
      point: 0
   }
});

export const mypageHostMeetings = atom<any>({
   key: 'mypageHostMeetings',
   default: { content: [] }
});

export const mypageAttendingMeetings = atom<any>({
   key: 'mypageAttendingMeetings',
   default: { content: [] }
});

export const myPoint = atom<any>({
   key: 'myPoint',
   default: []
});

export const modalState = atom<string>({
   key: 'modalState',
   default: ''
});
