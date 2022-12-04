import styles from './styles.module.css';
import { RowColor } from './Style';
import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }, index) => (
            <tr key={id} className={RowColor(styles, index)}>
              <td className={styles.cell}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default Transactions;
