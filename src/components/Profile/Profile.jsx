import PropTypes from 'prop-types';
import {
  ProfileInfo,
  Description,
  Avatar,
  Name,
  Stats,
  Item,
  Info,
} from './Profile.Styled';
// import { BiAt } from 'react-icons/bi';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileInfo>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>{tag}</Info>
        <Info>{location}</Info>
      </Description>
      <Stats>
        <Item>
          <span>Followers</span>
          <span>{followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{views}</span>
        </Item>
        <Item>
          <span>Likes</span>
          <span>{likes}</span>
        </Item>
      </Stats>
    </ProfileInfo>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
