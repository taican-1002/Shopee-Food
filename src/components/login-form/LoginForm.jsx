import React, { useState } from "react";
import "./login-form.scss";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../firebase";
import { addUser } from "../../actions/fireStoreAction";
import { toast } from "react-toastify";
import { useStore } from "../../stored/store";

import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext'

const LoginForm = () => {
  
  const { setUser } = useStore((state) => state);
  const handleLogin = async (Provider) => {
    try {
      const { _tokenResponse, user } = await signInWithPopup(auth, Provider);
      const { displayName, email, photoURL, uid } = user;
      setUser(user);
      if (_tokenResponse.isNewUser) {
        await addUser({ displayName, email, photoURL, uid });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const navigate = useNavigate();
  const { logIn } = useUserAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       await logIn(email, password);
       navigate('/')
     } catch (error){
       toast.error('Please fill full infomartion')
     }
  }
  
  
  return (
    <div className="login-form">
      <div className='sign-up'>
        <h1 className="sign-up__title">Sign up</h1>
        <div className="sign-up__social">
            <button
            className='sign-up__social__btn sign-up__google'
            onClick={() => handleLogin(googleProvider)}
            >
                <i className='bx bxl-google-plus' ></i>
                <span>Login with Google</span>
            </button>
            <button
            className='sign-up__social__btn sign-up__facebook'
            onClick={() => handleLogin(facebookProvider)}
            >
                <i className='bx bxl-facebook' ></i>
                <span>Login with Facebook</span>
            </button>
        </div>
      </div>

        <p className='login-form__not'>Hoặc đăng nhập bằng tài khoản của bạn</p>

      <form className='login' onSubmit={handleSubmit}>
          <div className='login__input'>
              <div className='login__input__username'>
                    <i className='bx bx-mail-send' ></i>
                    <input type='email' placeholder='Username or email'
                            onChange={(e) => setEmail(e.target.value)}
                    />
              </div>
              <div className='login__input__password'>
                    <i className='bx bxs-lock-alt' ></i>
                    <input type='password' placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                    />
              </div>
          </div>

          <div className='login__check-login'>
              <div className='login__check-login__left'>
                <input type='checkbox' className='login__check-login__input' />
                <span className='login__check-login__name'>Lưu thông tin đăng nhập</span>
              </div>
              <div className='login__check-login__right'>Quên mật khẩu ?</div>
          </div>

          <button className='login__btn' type='submit'>ĐĂNG NHẬP</button>
          <div className='login__policy'>
            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với  
            <u>Chính sách quy định của Foody</u>
          </div>
      </form>
    </div>
  );
};

export default LoginForm;