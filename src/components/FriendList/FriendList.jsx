import FriendListItem from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
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
