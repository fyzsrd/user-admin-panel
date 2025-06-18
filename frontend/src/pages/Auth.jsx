import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSucces } from '../utils/userSlice';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.user);



  const toggleMode = () => {
    setIsLogin(!isLogin);
    setForm({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/register';

    try {
      const response = await axios.post(endpoint, form);
      console.log('Success:', response.data);

      if (isLogin) {
        dispatch(
          loginSucces({
            user: response.data.user,
            token: response.data.token,
          })
        ); // ✅ Login handled, redirect will now happen via useEffect
        alert('Login successful!');
      } else {
        alert('Signup successful! Now login.');
        setIsLogin(true);
      }
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;
