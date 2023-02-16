import PropTypes from 'prop-types';

export function StatisticItem({ label, percentage }) {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
