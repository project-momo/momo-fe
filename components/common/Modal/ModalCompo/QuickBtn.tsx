interface BtnProps {
   value: string;
   func: any;
}

const QuickBtn = ({ value, func }: BtnProps) => {
   return (
      <button value={value} onClick={func}>
         {value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </button>
   );
};

export default QuickBtn;
