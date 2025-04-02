import { Routes, Route } from "react-router-dom";

import MainMenu from "../MainMenu/MainMenu";


import HomePage from "../../pages/HomePage/HomePage";
import PostsPage from "../../pages/PostsPage/PostsPage";


import SinglePostPage from "../../pages/SinglePostPage/SinglePostPage";

import "../../styles/style.css";

function App() {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
      </Routes>
   
    </>
  );
}

export default App;
