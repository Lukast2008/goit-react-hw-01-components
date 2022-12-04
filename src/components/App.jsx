import React from 'react';
// import ReactDOM from 'react-dom/client';
import ProFile from './User/User';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/Friends';
import Transactions from './Transactions/Transactions';

import user from "../data/user.json"
import Data from '../data/data.json';
import Friends from '../data/friends.json';
import TransactionHistory from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <ProFile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
 />
      <Statistics title="Upload stats" data={Data} />
      <FriendsList friends={Friends} />
      <Transactions transactions={TransactionHistory} />
    </>
  );
};
