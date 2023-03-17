import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";

export default ({ productImgs, productImgsSmall }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    if (window.innerWidth > 767) return setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <SlideProduct
        className="grid md:cursor-pointer md:grid-cols-4 md:gap-4"
        productImgs={productImgs}
        productImgsSmall={productImgsSmall}
        // onClick={handleOpenModal}
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <ModalProduct
            className="hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-xl md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
            productImgs={productImgs}
            isOpenModal={isOpenModal}
            productImgsSmall={productImgsSmall}
            handleCloseModal={handleCloseModal}
          />
          <span
            className="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] backdrop-blur-sm "
            onClick={handleCloseModal}
          ></span>
        </>
      )}
    </div>
  );
};
