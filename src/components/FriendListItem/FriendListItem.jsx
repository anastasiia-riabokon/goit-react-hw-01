export const FriendListItem = ({ imgSrc, name, status, id }) => {
  return (
    <li key={id}>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <p>{status ? 'Online' : 'Offline'}</p>
    </li>
  );
};
export default FriendListItem;
