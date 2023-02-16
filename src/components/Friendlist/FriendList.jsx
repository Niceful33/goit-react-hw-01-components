import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        // <FriendItem friend={friend} />
        <li key={friend.id}>
          <FriendItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
