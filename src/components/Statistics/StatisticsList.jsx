import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';
// import { StatisticsTitle } from './StatisticsTitle';

export function StatisticsList({ stats, title }) {
  return (
    <section>
      <div>{title && <h2>Upload stats</h2>}</div>
      {/* <StatisticsTitle title={title} /> */}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
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
