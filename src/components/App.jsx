import '../App.css';

import userData from '../data/userData.json';
import friends from '../data/friends.json';

import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />

      <FriendList friends={friends} />
    </>
  );
};

export default App;
