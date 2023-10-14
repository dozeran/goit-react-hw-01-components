export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, name, avatar }) => (
    <li className="item" key={id}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  ));
};
