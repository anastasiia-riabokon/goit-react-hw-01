import css from './TransactionValue.module.css';

export const TransactionValue = ({ type, amount, currency }) => {
  return (
    <tr className={css.even__empty}>
      <td className={css.empty__text}>
        {type[0].toUpperCase() + type.slice(1)}
      </td>
      <td className={css.empty__text}>{amount}</td>
      <td className={css.empty__text}>{currency}</td>
    </tr>
  );
};
export default TransactionValue;
