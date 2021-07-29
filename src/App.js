import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-12'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Синхронные посты</h2>
          <Posts posts={[]} />
        </div>
        <div className='col-sm-6'>
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
