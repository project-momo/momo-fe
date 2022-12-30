import { RadioButtons } from '../../../pages/meeting/create';
import { SetStateAction } from 'react';

interface DateRadioProps {
   setDatePolicy: (value: SetStateAction<string>) => void;
   setPersonnel: (value: SetStateAction<number>) => void;
}

const DateRadio = ({ setDatePolicy, setPersonnel }: DateRadioProps) => {
   return (
      <RadioButtons>
         <label>
            <input
               type="radio"
               name="schedule"
               value="ONE_DAY"
               defaultChecked
               onChange={e => {
                  setDatePolicy(e.target.value);
               }}
            />
            하루 일정
         </label>
         <label>
            <input
               type="radio"
               name="schedule"
               value="PERIOD"
               onChange={e => {
                  setDatePolicy(e.target.value);
               }}
            />
            정기 일정
         </label>
         <label>
            <input
               type="radio"
               name="schedule"
               value="FREE"
               onChange={e => {
                  setDatePolicy(e.target.value);
                  setPersonnel(1);
               }}
            />
            자유 일정
         </label>
      </RadioButtons>
   );
};

export default DateRadio;
