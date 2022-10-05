import "./Post.css";

const Post = () => {
  return (
    <div className='post'>
      <img className='post-img' src='https://picsum.photos/700/300' alt='' />
      <div className='post-info'>
        <div className='post-cats'>
          <span className='post-cat'>Music</span>
          <span className='post-cat'>Life</span>
        </div>
        <div className='post-title'>Lorem ipsum dolcor sru amor</div>
        <div className='post-date'>1 hour ago</div>
      </div>
      <div>
        <p className='post-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          soluta suscipit molestiae, earum id minima sunt accusamus repellat!
          Ipsum tenetur neque quos enim delectus eos, fugit dolorem dolorum ipsa
          reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellendus soluta suscipit molestiae, earum id minima sunt
          accusamus repellat! Ipsum tenetur neque quos enim delectus eos, fugit
          dolorem dolorum ipsa reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellendus soluta suscipit molestiae,
          earum id minima sunt accusamus repellat! Ipsum tenetur neque quos enim
          delectus eos, fugit dolorem dolorum ipsa reprehenderit!
        </p>
      </div>
    </div>
  );
};

export default Post;
