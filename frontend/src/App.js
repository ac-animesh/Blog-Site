import Navbar from './components/Navbar/Navbar';
import NewPostPage from './pages/NewPost/NewPostPage';
import Home from './pages/Home/Home';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <SinglePostPage /> */}
      {/* <NewPostPage /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
};

export default App;
