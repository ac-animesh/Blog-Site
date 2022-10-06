import './Register.css';

const Register = () => {
  return (
    <div className='form'>
      <form className='form-group'>
        <div className='form-item'>
          <h1>Register</h1>
        </div>
        <div className='form-item'>
          <label>Name</label>
          <input type='text' placeholder='Enter your name' />
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
          <button className='register-btn'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
