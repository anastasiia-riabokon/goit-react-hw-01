import TransactionValue from '../TransactionValue/TransactionValue';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionValue
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
