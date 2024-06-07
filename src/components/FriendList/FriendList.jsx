import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          imgSrc={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
};
export default FriendList;
