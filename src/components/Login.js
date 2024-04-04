import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [authMode, setAuthMode] = useState('signin'); // Default to signin
    const navigate = useNavigate();
    const checkAccountExists = (callback) => {
        fetch('http://localhost:3080/check-account', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
          .then((r) => r.json())
          .then((r) => {
            callback(r?.userExists)
          })
      }
    const onButtonClick = () => {
        // Clear any previous errors
        setEmailError('');
        setPasswordError('');
        checkAccountExists((accountExists) => {
        if (authMode === 'signin' && accountExists) {
            // Login logic
            if ('' === email) {
                setEmailError('Hãy nhập email của bạn');
                return;
            }
            if ('' === password) {
                setPasswordError('Hãy nhập mật khẩu của bạn');
                return;
            }
            // Perform login API call
            fetch('http://localhost:3080/auth', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
              })
            .then((r) => r.json())
            .then((r) => {
                if ('success' === r.message) {
                    // Login successful
                    localStorage.setItem('user', JSON.stringify({ email, token: r.token }));
                    props.setLoggedIn(true);
                    props.setEmail(email);
                    navigate('/');
                } else {
                    // Login failed
                    window.alert('Bạn đã nhập sai Email hoặc mật khẩu');
                }
            })
            .catch(error => console.error('Login error:', error));
        } else {
            // Registration logic
            if ('' === fullName) {
                setEmailError('Hãy họ và tên của bạn');
                return;
            }
            if ('' === email) {
                setEmailError('Hãy nhập email của bạn');
                return;
            }
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                setEmailError('Hãy nhập email hợp lệ');
                return;
            }
            if ('' === password) {
                setPasswordError('Hãy nhập mật khẩu của bạn');
                return;
            }
            if (password.length < 7) {
                setPasswordError('The password must be 8 characters or longer');
                return;
            }
            checkAccountExists((accountExists) => {
                if (accountExists) {
                    window.alert('Địa chỉ email này đã tồn tại');
                    setAuthMode('signin'); //Quay lại màn hình đăng nhập
                } else {
            // Perform registration API call
            fetch('http://localhost:3080/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, password }),
            })
            .then((r) => r.json())
            .then((r) => {
                if ('success' === r.message) {
                    // Registration successful
                    window.confirm(
                        'Bạn có muốn tạo tài khoản mới',
                      )                  
                    setAuthMode('signin'); //Quay lại màn hình đăng nhập
                } else {
                    // Registration failed
                    window.alert('Đăng ký thất bại');
                }
            })
            .catch(error => console.error('Registration error:', error));
        }})}
    })
    };

    const changeAuthMode = () => {
        setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
        setFullName('');
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
                    {authMode === 'signup' && (
                        <div className="form-group mt-3">
                            <label>Họ và tên</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Ví dụ: Nguyễn Văn A"
                                value={fullName}
                                onChange={(ev) => setFullName(ev.target.value)}
                            />
                        </div>
                    )}
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