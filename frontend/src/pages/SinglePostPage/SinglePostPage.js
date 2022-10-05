import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./SinglePostPage.css";

const SinglePostPage = () => {
  return (
    <div className='singlePostPage'>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePostPage;
