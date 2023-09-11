import PropTypes from "prop-types";
const BookMark = ({ bookMark }) => {
  return (
    <div>
      <h3 className=" text-lg font-semibold p-2 rounded bg-white">
        {bookMark.title}
      </h3>
    </div>
  );
};
BookMark.propTypes = {
  bookMark: PropTypes.object.isRequired,
};
export default BookMark;
