import PropTypes from 'prop-types';
import { Item, Indicator } from '../FriendItem/FriendItem.Styled';
export function FriendItem({ friend: { avatar, name, isOnline } }) {
  return (
    <Item>
      <Indicator isOnline={isOnline}></Indicator>

      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}
FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
