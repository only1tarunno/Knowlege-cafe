import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between mb-10 pt-10 pb-8 items-center border-b">
      <h1 className="text-4xl text-center font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
