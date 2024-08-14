import React, { useState } from 'react';

function AuthButtons() {
  const [showLogin, setShowLogin] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username && password) {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const result = await response.json();
        if (response.ok) {
          console.log('Login successful:', result);
          setLoginError('');
        } else {
          setLoginError(result.message || 'Login failed');
        }
      } catch (error) {
        setLoginError('An error occurred');
      }
    } else {
      setLoginError('Please fill in all fields');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (username && email && password) {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });
        const result = await response.json();
        if (response.ok) {
          console.log('Registration successful:', result);
          setRegisterError('');
        } else {
          setRegisterError(result.message || 'Registration failed');
        }
      } catch (error) {
        setRegisterError('An error occurred');
      }
    } else {
      setRegisterError('Please fill in all fields');
    }
  };

  return (
    <div className="auth-buttons-container">
      <Navbar />
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Register</button>

      {showLogin ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="auth-form">
            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            {loginError && <p className="error-text">{loginError}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister} className="auth-form">
            <input name="username" type="text" placeholder="Username" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            {registerError && <p className="error-text">{registerError}</p>}
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
