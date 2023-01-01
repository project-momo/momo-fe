import { NumberInput, RadioButtons } from '../../pages/meeting/create';
import { useState, SetStateAction } from 'react';

interface PriceProps {
   datePolicy: string;
   price: number;
   setPrice: (value: SetStateAction<number>) => void;
}

const Price = ({ datePolicy, price, setPrice }: PriceProps) => {
   const [pricePolicy, setPricePolicy] = useState('PAY');

   return (
      <RadioButtons>
         <label>
            <input
               type="radio"
               name="price"
               defaultChecked
               onChange={() => {
                  setPricePolicy('PAY');
               }}
            />
            <span>{datePolicy === 'FREE' ? '시간당 가격' : '하루당 가격'}</span>
            <NumberInput
               type="number"
               disabled={pricePolicy === 'FREE' && true}
               min={0}
               value={price}
               onChange={e => setPrice(Number(e.target.value))}
            />
         </label>
         <label>
            <input
               type="radio"
               name="price"
               onChange={() => {
                  setPricePolicy('FREE');
                  setPrice(0);
               }}
            />
            <span>무료</span>
         </label>
      </RadioButtons>
   );
};

export default Price;
