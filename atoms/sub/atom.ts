import { atom } from 'recoil';

export const setIsShareModalOpen = atom<boolean>({
   key: 'setIsShareModalOpen',
   default: false
});

interface HostType {
   email: string;
   imageUrl: string;
   nickname: string;
   userId: number;
}
interface SubDataType {
   address: {
      addressInfo: string;
      addresses: string[];
   };
   category: string;
   content: string;
   host: HostType;
   isOpen: boolean;
   meetingState: string;
   price: number;
   title: string;
   questions: [];
   meetingId: number;
   dateTime: {
      datePolicy: string;
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
      maxTime: number;
      dayWeeks: [];
      dates: string[];
   };
}
export const setSubDataObject = atom<SubDataType>({
   key: 'setSubDataObject',
   default: {
      address: {
         addressInfo: '',
         addresses: []
      },
      category: '',
      content: '',
      host: {
         email: '',
         imageUrl: '',
         nickname: '',
         userId: 0
      },
      isOpen: true,
      meetingState: '',
      price: 0,
      title: '',
      questions: [],
      meetingId: 0,
      dateTime: {
         datePolicy: '',
         startDate: '',
         endDate: '',
         startTime: '',
         endTime: '',
         maxTime: 0,
         dayWeeks: [],
         dates: []
      }
   }
});
