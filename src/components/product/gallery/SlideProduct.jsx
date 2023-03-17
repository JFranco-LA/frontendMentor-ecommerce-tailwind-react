import { useEffect, useRef, useState } from "react";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import CloseIcon from "@/components/icons/CloseIcon";

export default ({
  productImgs = [],
  productImgsSmall = [],
  isOpenModal = false,
  handleCloseModal = null,
  handleOpenModal = () => {},
  ...props
}) => {
  const [imgIndex, setImgIndex] = useState(0);

  const btnSlider = useRef(null);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

  const handleClickNext = () => {
    console.log("next");
    imgIndex === productImgs.length - 1
      ? setImgIndex(0)
      : setImgIndex(imgIndex + 1);
  };
  const handleClickPrev = () => {
    console.log("prev");
    if (imgIndex === 0) return setImgIndex(productImgs.length - 1);
    setImgIndex(imgIndex - 1);
  };

  return (
    <section {...props}>
      {isOpenModal && (
        <button className="md:col-span-4" onClick={handleCloseModal}>
          <CloseIcon />
        </button>
      )}
      <div className="relative col-span-4 flex items-center">
        <img
          src={productImgs[imgIndex]}
          alt=""
          className="aspect-[16/12] w-full md:aspect-[16/17] md:rounded-md xl:aspect-[16/16] 2xl:max-h-[500px]"
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className="absolute flex w-full justify-between px-4 md:hidden"
        >
          <button
            className="grid h-9 w-9 place-items-center rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid h-9 w-9 place-items-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {productImgsSmall.map((smallImg, i) => (
        <div
          onClick={() => {
            setImgIndex(i);
          }}
          key={i}
          className="relative overflow-hidden rounded-md"
        >
          <img
            src={smallImg}
            alt=""
            className="hidden md:block md:rounded-md"
          />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === imgIndex && "bg-[rgba(255,255,255,0.5)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};
