import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from "react-router-dom";
import PostNews from './components/PostsNew';
import PostView from './components/PostView';
import MainPage from './components/MainPage';


function App() {

  return (
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/new" element={<PostNews />} />
          <Route path="/posts/:postId" element={<PostView />} />
        </Routes>
      </Container>
  );
}

export default App;
