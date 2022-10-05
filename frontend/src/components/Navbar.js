import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>Blog Site</div>
      <div className='item-groups'>
        <ul className='item-list'>
          <li className='item'>
            <i className='search-item fa-solid fa-magnifying-glass'></i>
          </li>
          <li className='item'>
            <a href>Home</a>
          </li>
          <li className='item'>
            <a href>Contact</a>
          </li>
          <li className='item'>
            <a href>Write</a>
          </li>
          <li className='item'>
            <a href>Logout</a>
          </li>
          <li className='item'>
            <img
              className='nav-image'
              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
              alt='user-img'
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
