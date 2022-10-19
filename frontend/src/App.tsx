import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import ArticlesList from "./components/ArticlesList";
import Categories from "./components/Categories";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Categories/>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/category/:slug" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
