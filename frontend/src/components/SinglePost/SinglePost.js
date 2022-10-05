import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePost-info'>
        <img
          className='singlePost-img'
          src='https://picsum.photos/750/300'
          alt='post-img'
        />
        <div className='singlePost-title'>
          <h1>Lorem ipsum dolcor sru amor</h1>
          <div className='singlePost-icons'>
            <i class='singlePost-icon fa-regular fa-pen-to-square'></i>
            <i class='singlePost-icon fa-solid fa-trash'></i>
          </div>
        </div>
        <div className='singlePost-author'>Author: Jenny</div>
        <div className='singlePost-date'>1 hour ago</div>
        <div className='singlePost-desc'>
          <p className='post-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            soluta suscipit molestiae, earum id minima sunt accusamus repellat!
            Ipsum tenetur neque quos enim delectus eos, fugit dolorem dolorum
            ipsa reprehenderit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus soluta suscipit molestiae, earum id
            minima sunt accusamus repellat! Ipsum tenetur neque quos enim
            delectus eos, fugit dolorem dolorum ipsa reprehenderit! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Repellendus soluta
            suscipit molestiae, earum id minima sunt accusamus repellat! Ipsum
            tenetur neque quos enim delectus eos, fugit dolorem dolorum ipsa
            reprehenderit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
