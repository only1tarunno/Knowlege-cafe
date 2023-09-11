import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/header";
function App() {
  const [bookMarks, setBooksMarks] = useState([]);
  const handleAddToBookMarks = (blog) => {
    console.log("bools");
  };
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <Header></Header>
      <div className="flex flex-col md:flex-row gap-10">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
