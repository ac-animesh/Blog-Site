import './NewPost.css';

const NewPost = () => {
  return (
    <div className='newPost'>
      <div className='newPost-formGroup'>
        <div className='autofocus'>
          <img
            className='newPost-img'
            src='https://picsum.photos/700/300'
            alt='newPostImg'
          />
        </div>
        <div className='newPost-Header'>
          <input className='fileUploader' type='file' id='fileUpload' />
          <input
            className='newPost-Title'
            type='text'
            placeholder='Enter Post Title'
            autofocus='true'
          />
          <label htmlFor='fileUpload'>
            <i className='fileUpload-Icon fa-solid fa-file-circle-plus'></i>
          </label>
        </div>
        <div className='newPost-Body'>
          <div className='newPost-group'>
            <textarea
              className='newPost-desc'
              type='text'
              placeholder='Tell your story'
            />
          </div>
          <div>
            <button className='newPost-btn'>Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
