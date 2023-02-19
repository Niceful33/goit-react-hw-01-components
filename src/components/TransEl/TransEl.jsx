import PropTypes from 'prop-types';
import { Tr } from '../TransEl/TransEl.Styled';
export function TransEl({ type, amount, currency }) {
  return (
    <Tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Tr>
  );
}

TransEl.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
