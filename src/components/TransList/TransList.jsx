import PropTypes from 'prop-types';
import { TransEl } from '../TransEl/TransEl';
import { Table, Th } from '../TransList/TransList.Styled';

export function TransList({ items }) {
  //   console.log(items);
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransEl key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </Table>
  );
}
TransList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
