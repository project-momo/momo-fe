import { NumberInput, RadioButtons } from '../../pages/meeting/create';
import { useRef } from 'react';

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
        <span>시간당 가격</span>
        <NumberInput
          type="number"
          ref={hourPriceRef}
          value={Number(hourPrice)}
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
        <span>하루당 가격</span>
        <NumberInput
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
