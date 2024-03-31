import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
  
    const navigate = useNavigate()
  
    const onButtonClick = () => {
      // Đặt giá trị lỗi ban đầu thành trống
      setEmailError('')
      setPasswordError('')
      // Kiểm tra xem người dùng đã nhập đúng cả hai trường chưa
      if ('' === email) {
        setEmailError('Please enter your email')
        return
      }
    
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Please enter a valid email')
        return
      }
    
      if ('' === password) {
        setPasswordError('Please enter a password')
        return
      }
    
      if (password.length < 7) {
        setPasswordError('The password must be 8 characters or longer')
        return
      }
    
      checkAccountExists((accountExists) => {
        // Nếu đúng, đăng nhập
        if (accountExists) logIn()
        // Ngược lại, hãy hỏi người dùng xem họ có muốn tạo tài khoản mới không và nếu có thì hãy đăng nhập
        else if (
          window.confirm(
            'An account does not exist with this email address: ' + email + '. Do you want to create a new account?',
          )
        ) {
          logIn()
        }
      })
    }
    // Gọi API máy chủ để kiểm tra xem ID email đã cho đã tồn tại chưa
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
  
  // Đăng nhập người dùng bằng email và mật khẩu
  const logIn = () => {
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
          localStorage.setItem('user', JSON.stringify({ email, token: r.token }))
          props.setLoggedIn(true)
          props.setEmail(email)
          navigate('/')
        } else {
          window.alert('Wrong email or password')
        }
      })
  }
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Đăng nhập</h3>
            <div className="text-center">
              Bạn chưa có tài khoản?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Đăng ký
              </span>
            </div>
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
              <button  className="btn btn-primary" type="button" onClick={onButtonClick} value={'Log in'}>
                Hoàn thành
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="#">Quên mật khẩu?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Đăng ký</h3>
          <div className="text-center">
            Bạn đã có tài khoản?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Đăng nhập
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Họ và tên</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ví dụ: Nguyễn Văn A"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
            type="email"
            className="form-control mt-1"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            />
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
          <button  className="btn btn-primary" type="button" onClick={onButtonClick} value={'Log in'}>
              Hoàn thành
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#"> Quên mật khẩu?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
export default Login;