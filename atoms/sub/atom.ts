import { atom } from 'recoil';
import { v1 } from 'uuid';

export const setIsShareModalOpen = atom<boolean>({
   key: `setIsShareModalOpen/${v1()}`,
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
      startDate: any;
      endDate: any;
      startTime: string;
      endTime: string;
      maxTime: number;
      dayWeeks: [];
      dates: string[];
   };
}
export const setSubDataObject = atom<SubDataType>({
   key: `setSubDataObject/${v1()}`,
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

export const nowCategoryState = atom<string | string[]>({
   key: `nowCategoryState/${v1()}`,
   default: ''
});
export const freeDate = atom<any>({
   key: `freeDate/${v1()}`,
   default: null
});

export const totalPrice = atom<number>({
   key: `totalPrice/${v1()}`,
   default: 0
});
