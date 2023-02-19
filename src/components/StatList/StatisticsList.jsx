import PropTypes from 'prop-types';
import { StatisticItem } from '../StatItem/StatisticItem';
import { Title, Statistics, List } from '../StatList/StatisList.Styled';
// import { StatisticsTitle } from './StatisticsTitle';

export function StatisticsList({ stats, title }) {
  return (
    <Statistics>
      <div>{title && <Title>Upload stats</Title>}</div>
      {/* <StatisticsTitle title={title} /> */}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Statistics>
  );
}
StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
