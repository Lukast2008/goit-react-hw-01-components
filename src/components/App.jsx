import React from 'react';
// import ReactDOM from 'react-dom/client';
import ProFile from './User/User';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/Friends';
import Transactions from './Transactions/Transactions';
import Data from '../data/data.json';
import Friends from '../Friends/friends.json';
import TransactionHistory from '../Transactions/transactions.json';

export const App = () => {
  return (
    <React.StrictMode>
      <ProFile />
      <Statistics data={Data} />
      <FriendsList friends={Friends} />
      <Transactions transactions={TransactionHistory} />
    </React.StrictMode>
  );
};
