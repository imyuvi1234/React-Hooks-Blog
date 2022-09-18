import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";

function App(){
    return(
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<PostDetail />} />
                <Route path="/create-post" element={<CreatePost />} />

            </Routes>
        </div>
    );
}

export default App;