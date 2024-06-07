import '../App.css';

import userData from '../data/userData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Section from './Section/Section';
import Heading from './Heading/Heading';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <>
      <Section>
        <Heading title="Profile" bottom />
        <Profile
          name={username}
          tag={tag}
          location={location}
          image={avatar}
          stats={stats}
        />
      </Section>

      <Section>
        <Heading title="Friends" top bottom />
        <FriendList friends={friends} />
      </Section>

      <Section>
        <Heading title="Statistic" top bottom />
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};

export default App;
