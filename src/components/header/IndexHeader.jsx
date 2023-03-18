import { useContext, useState } from "react";
import { useCartModal } from "@/context/useCartModal";

import LogoSneakers from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";

import CartModalHeader from "@/components/header/CartModalHeader";

const MainHeader = () => {
  const { totalQuantityProducts } = useContext(useCartModal);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isToggleCart, setIsToggleCart] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-8 p-4 md:p-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="logo-page"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav
          className={`md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu
              ? "absolute top-0 left-0 z-10 flex h-full w-3/4 flex-col gap-4 gap-y-[21px] bg-white p-8"
              : "hidden"
          } font-bold`}
        >
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button
            className="relative"
            onClick={() => setIsToggleCart(!isToggleCart)}
          >
            <CartIcon />
            <span className="absolute top-0 right-0 translate-x-1 rounded-full bg-orange-primary px-1 text-xs font-bold text-white">
              {totalQuantityProducts}
            </span>
          </button>
          {isToggleCart && <CartModalHeader />}
          <img className="w-10" src={Avatar} alt="" />
        </div>
      </header>
      <span className="w-f container mx-auto h-[1.5px] bg-gray-300 md:block"></span>
    </>
  );
};

export default MainHeader;
