import PropTypes from 'prop-types';
import { Item, getRandomHexColor, Label } from '../StatItem/StatsItem.Styled';

export function StatisticItem({ label, percentage }) {
  return (
    <Item style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{label}</Label>
      <Label>{percentage}%</Label>
    </Item>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
