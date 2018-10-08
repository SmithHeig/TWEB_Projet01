import React from 'react';

const Friends = ({match}) => {
    return (
      <div>
        <h1>Friends</h1>
        <p>{match.params.username}</p>
      </div>
    )
};

export default Friends;