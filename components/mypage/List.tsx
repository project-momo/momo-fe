const List = ({ data }: any) => {
   const price = data.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
   return (
      <div className="list">
         <p className="message">
            {data.message}
            <span className="date">{data.date}</span>
         </p>
         <p className={data.state === 'plus' ? 'status plus' : 'status minus'}>
            {data.state === 'DEDUCT' ? '차감' : '적립'}
         </p>
         <p className="point">
            {data.state === 'plus' ? '+' : '-'}
            {price}원
         </p>
      </div>
   );
};

export default List;
