import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to store error messages

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form fields
    let formIsValid = true;
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
      formIsValid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    }

    // If form is not valid, set errors and return
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // If form is valid, handle successful submission
    console.log({ username, email, password });
    // Reset form fields if needed
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
