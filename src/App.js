import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Post from './components/Post/Post';
import Pagination from './components/Pagination/Pagination';


const App = () => {
 

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect (() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) =>setCurrentPage(pageNumber);
  
  return (
    <div className="container">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Post posts={currentPosts} 
            loading={loading} />
      <Pagination postPerPage={postPerPage} 
                  totalPosts={posts.length}
                  paginate={paginate} />
    </div>
  );
};


export default App;
