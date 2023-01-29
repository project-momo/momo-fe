import { atom } from 'recoil';
import { v1 } from 'uuid';

export const myProfile = atom<any>({
   key: `myProfile/${v1()}`,
   default: { point: 0 }
});

export const mypageHostMeetings = atom<any>({
   key: `mypageHostMeetings/${v1()}`,
   default: { content: [] }
});

export const mypageAttendingMeetings = atom<any>({
   key: `mypageAttendingMeetings/${v1()}`,
   default: { content: [] }
});

export const myPoint = atom<any>({
   key: `myPoint/${v1()}`,
   default: []
});

export const modalState = atom<string>({
   key: `modalState/${v1()}`,
   default: ''
});

export const meetingInfo = atom<any>({
   key: `meetingInfo/${v1()}`,
   default: {}
});

export const selectedMeeting = atom<any>({
   key: `selectedMeeting/${v1()}`,
   default: {}
});

export const selectedReservation = atom<any>({
   key: `selectedReservation/${v1()}`,
   default: {}
});

export const applications = atom<any>({
   key: `applications/${v1()}`,
   default: {}
});
