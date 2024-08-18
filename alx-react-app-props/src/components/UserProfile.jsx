import React from 'react';
import { useUser } from './UserContext';

const UserProfile = ({ name, age, bio }) => {
  const userData = useUser(); // Use the custom hook to access the context

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
