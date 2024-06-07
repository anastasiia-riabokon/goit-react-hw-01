import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ imgSrc, name, status, id }) => {
  return (
    <li className={css.item} key={id}>
      <img className={css.card__img} src={imgSrc} alt={name} />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css.text, {
          [css.is__online]: status,
          [css.is__offline]: !status,
        })}
      >
        {status ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};
export default FriendListItem;
