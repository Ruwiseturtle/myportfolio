import React from 'react'

const UserPage = ({login}) => {
  return (
    <div className="containerUserPage">
      <div className='textUserPage'>it's your page, {login}</div>
    </div>
  );
}

export default UserPage
