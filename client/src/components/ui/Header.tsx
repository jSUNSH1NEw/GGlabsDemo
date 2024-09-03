import Image from "next/image";
import Logo from "public/logo.svg";

const Header = () => {
  return (
    <div className="app-header-container">
      <div className="flex flex-col gap-2.5 items-center">
        <Image src={Logo} alt="logo" />
        <div className="text-center text-white text-xl font-extrabold font-['Inter'] leading-[30px]">
          GG LABS
        </div>
        <div className="text-center text-white text-opacity-50 text-base font-normal font-['SF Mono'] leading-normal">
          Wallet connect demo
        </div>
      </div>
    </div>
  );
};

export default Header;
