import { Avatar, Container, Name, Stats, StatsItem } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Container>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatsItem>
      </Stats>
    </Container>
  );
};
