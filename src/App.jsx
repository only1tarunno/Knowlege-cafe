import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/header";
function App() {
  const [bookMarks, setBooksMarks] = useState([]);
  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBooksMarks(newBookMarks);
  };

  const [time, setTime] = useState(0);
  const handleAddTime = (readtime) => {
    const newNum = time + readtime;
    setTime(parseInt(newNum));
  };
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <Header></Header>
      <div className="flex flex-col md:flex-row gap-10">
        <Blogs
          handleAddToBookMarks={handleAddToBookMarks}
          handleAddTime={handleAddTime}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} time={time}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
