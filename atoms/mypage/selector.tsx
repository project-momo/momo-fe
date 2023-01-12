import { selector } from 'recoil';
import { mypageAttendingMeetings, mypageHostMeetings } from './atoms';

export const hostMeeting_opened = selector({
   key: 'hostMeeting_opened',

   get: ({ get }) => {
      const meetings = get(mypageHostMeetings);
      return meetings.content.filter((meeting: any) => meeting.isOpen === true);
   }
});

export const hostMeeting_closed = selector({
   key: 'hostMeeting_closed',

   get: ({ get }) => {
      const meetings = get(mypageHostMeetings);
      return meetings.content.filter((meeting: any) => meeting.isOpen === false);
   }
});

export const attendingMeeting_opened = selector({
   key: 'attendingMeeting_opened',

   get: ({ get }) => {
      const meetings = get(mypageAttendingMeetings);
      return meetings.content.filter((meeting: any) => meeting.isOpen === true);
   }
});

export const attendingMeeting_closed = selector({
   key: 'attendingMeeting_closed',

   get: ({ get }) => {
      const meetings = get(mypageAttendingMeetings);
      return meetings.content.filter((meeting: any) => meeting.isOpen === false);
   }
});
