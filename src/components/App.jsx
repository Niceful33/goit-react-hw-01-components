import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatList/StatisticsList';
import { FriendList } from './Friendlist/FriendList';
import { TransList } from './TransList/TransList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransList items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
