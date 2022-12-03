import styles from "./styles.module.css"
import { RowColor } from "./Style";
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

export default Transactions;
