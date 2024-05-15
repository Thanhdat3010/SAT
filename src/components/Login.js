import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import Firebase authentication
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [authMode, setAuthMode] = useState('signin'); // Mặc định là signin
    const navigate = useNavigate();

    const onButtonClick = async () => {
        setEmailError('');
        setPasswordError('');

        try {
            if (authMode === 'signin') {
                // Đăng nhập
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log('Đăng nhập thành công:', user);
                localStorage.setItem('user', JSON.stringify({ email }));
                localStorage.setItem('isLoggedIn', true);
                props.setLoggedIn(true);
                props.setEmail(email);
                navigate('/');
            } else {
                // Đăng ký
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log('Đăng ký thành công:', user);
                navigate('/signin');
            }
        } catch (error) {
            console.error('Lỗi xác thực:', error);
            if (error.code === 'auth/email-already-in-use') {
                setEmailError('Email đã được sử dụng');
            } else if (error.code === 'auth/invalid-email') {
                setEmailError('Email không hợp lệ');
            } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setPasswordError('Email hoặc mật khẩu không đúng');
            } else {
                setPasswordError('Đăng nhập/Đăng ký không thành công');
            }
        }
    };

    const changeAuthMode = () => {
        setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">{authMode === 'signin' ? 'Đăng nhập' : 'Đăng ký'}</h3>
                   
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                        <label className="errorLabel">{emailError}</label>
                    </div>
                    <div className="form-group mt-3">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <label className="errorLabel">{passwordError}</label>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" type="button" onClick={onButtonClick}>
                            {authMode === 'signin' ? 'Đăng nhập' : 'Đăng ký'}
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        <a href="#">{authMode === 'signin' ? 'Quên mật khẩu?' : ''}</a>
                    </p>
                    <div className="text-center">
                        {authMode === 'signin' ? 'Bạn chưa có tài khoản? ' : 'Bạn đã có tài khoản? '}
                        <span className="link-primary" onClick={changeAuthMode}>
                            {authMode === 'signin' ? 'Đăng ký' : 'Đăng nhập'}
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;