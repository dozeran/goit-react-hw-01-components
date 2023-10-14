import { Friends } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <FriendListItem friends={friends} />
    </Friends>
  );
};
