import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
        <span className='sidebar-title'>About Me</span>
        <img
          src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          alt='side-img'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          soluta suscipit molestiae, earum id minima sunt accusamus repellat!
          Ipsum tenetur neque quos enim delectus eos, fugit dolorem dolorum ipsa
          reprehenderit!
        </p>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>Categories</span>
        <ul className='sidebar-list'>
          <li className='sidebar-item-list'>Life</li>
          <li className='sidebar-item-list'>Music</li>
          <li className='sidebar-item-list'>Sports</li>
          <li className='sidebar-item-list'>Tech</li>
        </ul>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>Follow Us</span>
        <ul className='sidebar-social'>
          <i className='sidebar-icon fab fa-facebook-square'></i>
          <i className='sidebar-icon fab fa-twitter-square'></i>
          <i className='sidebar-icon fab fa-pinterest-square'></i>
          <i className='sidebar-icon fab fa-instagram-square'></i>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
