import './Login.css';

const Login = () => {
  return (
    <div className='form'>
      <form className='form-group'>
        <div className='form-item'>
          <h1>Login</h1>
        </div>
        <div className='form-item'>
          <label>Email</label>
          <input type='email' placeholder='Enter your email address' />
        </div>
        <div className='form-item'>
          <label>Password</label>
          <input type='password' placeholder='Enter your password' />
        </div>
        <div className='btn form-item'>
          <button className='login-btn'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
