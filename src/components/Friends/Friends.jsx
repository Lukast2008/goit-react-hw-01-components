import React from 'react';

const FriendsList = ({ friends }) => {
  function BackGround(isOnline) {
    return isOnline ? 'green' : 'red';
  }

  return (
    <ul className="friend-list" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li
          key={id}
          className="item"
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow:
              'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px',
            backgroundColor: '#FFF',
            width: '200px',
            height: '80px',
            margin: '0 auto',
            marginBottom: '20px',
            
          }}
        >
          <span
            className="status"
            style={{
              backgroundColor: BackGround(isOnline),
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              justifyContent: 'center',
              justifyItems: 'center',
              
            }}
          >
            {isOnline}
          </span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
