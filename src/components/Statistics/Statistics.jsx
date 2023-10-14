import {
  Item,
  Section,
  List,
  Persontage,
  getRandomColor,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomColor() }}>
            <span>{label}</span>
            <Persontage>{percentage}%</Persontage>
          </Item>
        ))}
      </List>
    </Section>
  );
};
