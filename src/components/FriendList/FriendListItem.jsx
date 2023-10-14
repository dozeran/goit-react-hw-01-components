import { Friend, Status } from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, name, avatar, isOnline }) => (
    <Friend key={id}>
      <Status ishide={+isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Friend>
  ));
};
