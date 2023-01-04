const List = ({ data }: any) => {
   const price = data.priceInfo.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
   return (
      <div className="list">
         <p className="message">
            {data.message}
            <span className="date">{data.date}</span>
         </p>
         <p className={data.priceInfo.status === 'plus' ? 'status plus' : 'status minus'}>{data.status}</p>
         <p className="point">
            {data.priceInfo.status === 'plus' ? '+' : '-'}
            {price}원
         </p>
      </div>
   );
};

export default List;
