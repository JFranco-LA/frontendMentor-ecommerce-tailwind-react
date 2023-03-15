import SlideProduct from "@/components/product/col-images/SlideProduct";
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
    <>
      <SlideProduct
        className="grid md:cursor-pointer md:grid-cols-4 md:gap-4"
        productImgs={productImgs}
        productImgsSmall={productImgsSmall}
        // onClick={handleOpenModal}
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <SlideProduct
          className="hidden md:absolute md:top-1/2 md:left-1/2 md:grid md:max-w-xl md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
          productImgs={productImgs}
          isOpenModal={isOpenModal}
          productImgsSmall={productImgsSmall}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
