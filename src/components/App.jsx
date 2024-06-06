import '../App.css';

import userData from '../data/userData.json';
import Profile from './Profile/Profile';

const App = () => {
  console.log(userData);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
