import css from './Profile.module.css';
import clsx from 'clsx';

export default function Profile({ name, tag, location, image, stats }) {
  const statsArray = Object.entries(stats);
  return (
    <div className={css.card}>
      <div className={css.card__main__info}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name__profile}>{name}</p>
        <p className={css.text__profile}>@{tag}</p>
        <p className={css.text__profile}>{location}</p>
      </div>
      <ul className={css.list}>
        {statsArray.map(([key, value]) => (
          <li className={css.item} key={key}>
            <span className={css.main__text}>
              {key[0].toUpperCase() + key.slice(1)}
            </span>
            <span className={clsx(css.text__bold, css.main__text)}>
              {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
