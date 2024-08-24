import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = ({ name, age, bio }) => {
  const userData = useContext(UserContext); // Directly use useContext with UserContext

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
