import TransactionValue from '../TransactionValue/TransactionValue';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.header__table}>Type</th>
          <th className={css.header__table}>Amount</th>
          <th className={css.header__table}>Currency</th>
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
