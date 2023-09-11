import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
const Bookmarks = ({ bookMarks }) => {
  return (
    <div className=" w-3/12">
      <div className="bg-[#f3f3f3] p-4 rounded space-y-3">
        <h2 className="font-bold text-2xl">
          Bookmarked Blogs : {bookMarks.length}
        </h2>
        {bookMarks.map((bookMark, idx) => (
          <BookMark key={idx} bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
};
export default Bookmarks;
