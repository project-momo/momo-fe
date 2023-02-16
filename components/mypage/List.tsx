interface ListProps {
   data: {
      amount: string;
      description: string;
      date: string;
      state: string;
      type: string;
   };
}

const List = ({ data }: ListProps) => {
   const price = data.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
   return (
      <div className="list">
         <p className="message">
            {data.description}
            <span className="date">{data.date}</span>
         </p>
         <p className={data.state === 'plus' ? 'status plus' : 'status minus'}>
            {data.state === 'DEDUCT' ? '출금' : '적립'}
         </p>
         <p className="point">
            {data.state === 'DEDUCT' ? '-' : '+'}
            {price}원
         </p>
      </div>
   );
};

export default List;
