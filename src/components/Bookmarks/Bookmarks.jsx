import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
const Bookmarks = ({ bookMarks, time }) => {
  return (
    <div className=" w-3/12">
      <div className=" bg-[#f0edfe] text-[#6951ed] p-5 text-2xl mb-4 rounded-lg border border-[#6951ed]">
        <h2>Spent time on read : {time} min</h2>
      </div>
      <div className="bg-[#f3f3f3] p-4 rounded-md space-y-3">
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
  time: PropTypes.func.isRequired,
};
export default Bookmarks;
