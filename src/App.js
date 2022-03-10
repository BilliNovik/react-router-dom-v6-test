import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFoundPage from "./pages/NotFoundPage";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <header className="header">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/blog" >Blog</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/" element={<About/>}>
            <Route path="company" element={<p>Company</p>}/>
            <Route path="team" element={<p>Team</p>}/>
          </Route>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<Post/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
