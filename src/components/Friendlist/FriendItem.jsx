import PropTypes from 'prop-types';

export function FriendItem({ friend: { avatar, name, isOnline } }) {
  //  let statusColor = online ? css.statusOn : css.statusOff;
  return (
    <div>
      <span className="status">{isOnline}</span>
      {/* <span className={statusColor}>{online}</span> */}
      <img src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
}
FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
