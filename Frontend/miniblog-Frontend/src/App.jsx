import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './component/Login';
import CreatePost from './component/CreatePost';
import MyPosts from './component/MyPosts';
import EditPost from './component/EditPost';
import PostDetail from './component/PostDetail';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<MyPosts />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </AuthProvider>
  );
}        

export default App;