import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="Krypto" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">
            Market
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">
            Exchange
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">
            Tutorials
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">
            Wallets
          </p>
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-200 mt-5" />
    </div>
  );
};

export default Footer;
