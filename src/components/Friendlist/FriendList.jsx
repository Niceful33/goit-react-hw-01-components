import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import { List } from '../Friendlist/FriendList.Styled';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
        // <FriendItem friend={friend} />
        // <li key={friend.id}>
        //   <FriendItem key={friend.id} friend={friend} />
        // </li>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
