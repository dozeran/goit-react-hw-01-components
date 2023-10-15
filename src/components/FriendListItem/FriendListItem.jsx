import { Friend, Status } from '../FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <Friend key={id}>
      <Status ishide={+isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Friend>
  );
};
