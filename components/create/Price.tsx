import { RadioButtons } from '../../pages/meeting/create';
import { useRef } from 'react';
import styled from 'styled-components';

interface PriceProps {
  setPricePolicy: any;
  hourPrice: number;
  onePrice: number;
  setHourPrice: any;
  setOnePrice: any;
}

const Price = ({
  setPricePolicy,
  hourPrice,
  onePrice,
  setHourPrice,
  setOnePrice,
}: PriceProps) => {
  const hourPriceRef = useRef<HTMLInputElement>(null);
  const onePriceRef = useRef<HTMLInputElement>(null);

  const onDisabled = (value: any) => {
    if (!hourPriceRef.current) return;
    if (!onePriceRef.current) return;

    if (value === 'HOUR') {
      hourPriceRef.current.disabled = false;
      onePriceRef.current.disabled = true;
    } else {
      hourPriceRef.current.disabled = true;
      onePriceRef.current.disabled = false;
    }
  };

  return (
    <RadioButtons>
      <label>
        <input
          type="radio"
          name="price"
          value="HOUR"
          defaultChecked
          onChange={(e) => {
            setPricePolicy(e.target.value);
            onDisabled(e.target.value);
          }}
        />
        시간당 가격
        <PriceInput
          type="number"
          ref={hourPriceRef}
          value={hourPrice}
          onChange={(e) => setHourPrice(Number(e.target.value))}
        />
      </label>
      <label>
        <input
          type="radio"
          name="price"
          value="DAY"
          onChange={(e) => {
            setPricePolicy(e.target.value);
            onDisabled(e.target.value);
          }}
        />
        하루당 가격
        <PriceInput
          type="number"
          disabled
          ref={onePriceRef}
          value={Number(onePrice)}
          onChange={(e) => setOnePrice(Number(e.target.value))}
        />
      </label>
    </RadioButtons>
  );
};

export default Price;

const PriceInput = styled.input`
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 100px;
  padding: 10px 15px;
  margin-left: 10px;
  border: none;
  outline: none;
  font-family: inherit;

  &:disabled {
    background-color: #f0f0f0;
  }
`;
