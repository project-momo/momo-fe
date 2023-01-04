const QuickBtn = ({ value, func }: any) => {
   return (
      <button value={value} onClick={func}>
         {value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </button>
   );
};

export default QuickBtn;
