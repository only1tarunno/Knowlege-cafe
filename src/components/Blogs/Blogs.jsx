import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookMarks }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-9/12">
      {blogs.map((blog) => (
        <Blog
          handleAddToBookMarks={handleAddToBookMarks}
          blog={blog}
          key={blog.id}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookMarks: PropTypes.func.isRequired,
};
export default Blogs;
