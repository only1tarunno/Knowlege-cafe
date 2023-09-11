import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/header";
function App() {
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <Header></Header>
      <div className="flex flex-col md:flex-row gap-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
