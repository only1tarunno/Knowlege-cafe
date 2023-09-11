import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookMarks }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 pb-5 border-b space-y-5">
      <img
        src={cover}
        className="rounded-lg w-full"
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 justify-start w-6/12">
          <img src={author_img} className="w-14" alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="w-6/12 text-end">
          <span className="me-2">
            {reading_time >= 10 ? `${reading_time}` : `0${reading_time}`} min
            read
          </span>
          <button onClick={handleAddToBookMarks}>
            <i className="fa-solid fa-bookmark"></i>
          </button>
        </div>
      </div>
      <h2 className="font-bold text-[40px] max-w-3xl">{title}</h2>
      <p>
        {hashtags.map((hashtag, index) => (
          <span key={index}>
            <a className="ms-2" href="">
              #{hashtag}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func.isRequired,
};
export default Blog;
