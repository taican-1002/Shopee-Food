import React from 'react';
import LoginForm from '../../components/login-form/LoginForm';
import { useStore } from "../../stored/store";

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const { user } = useStore((state) => state);

  if (user) {
    setTimeout(()=> {
      navigate('/')
    },10)
  }
  return (
    <div style={{
      background: '#f2f2f2',
      height: '100vh'
    }}>
        <LoginForm/>
    </div>
  )
}

export default Login