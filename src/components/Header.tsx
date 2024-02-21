

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center px-[5%] h-[60px] bg-black text-white font-mono font-semibold border-b border-white">
        <a className=" hover:animate-pulse hover:scale-150">About</a>
        <a className=" hover:animate-pulse hover:scale-150">Skills</a>
        <a className=" hover:animate-pulse hover:scale-150">Projects</a>
        <a className=" hover:animate-pulse hover:scale-150">Contacts</a>
      </div>
    </>
  );
};

export default Header
