import CartIcon from "@/components/icons/CartIcon";
import { useCartModal } from "@/context/useCartModal";
import { useContext, useState } from "react";

export default ({ objectProducts = {} }) => {
  const { addCartProducts } = useContext(useCartModal);

  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count === 0) return;

    setCount(count - 1);
  };

  const handleAddToCart = () => {
    addCartProducts({
      img: objectProducts.imagesSmall[0],
      id: objectProducts.id,
      discountPrice: objectProducts.price * (1 - objectProducts.discount),
      title: objectProducts.title,
      quantity: count || 1,
    });
    setCount(1);
  };

  return (
    <section className="container mx-auto flex flex-col gap-4 px-4 md:px-0">
      <p className="font-bold uppercase tracking-wider text-orange-primary">
        {objectProducts.subtitle}
      </p>
      <h2 className="text-3xl font-bold">{objectProducts.title}</h2>
      <p className="text-dark-grayish-blue">{objectProducts.description}</p>
      <div className="grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-0">
        <span className="text-3xl">
          ${(objectProducts.price * objectProducts.discount).toFixed(2)}
        </span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          {objectProducts.discount * 100}%
        </span>
        <span className="text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left">
          ${objectProducts.price.toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-y-4 font-bold md:grid-cols-[1fr_1.5fr]">
        <div className="col-span-3 flex items-baseline justify-between rounded-lg bg-light-grayish-blue py-2 px-5 pb-3 md:col-span-1">
          <button
            className="pr-3 text-3xl text-orange-primary"
            onClick={decrementCount}
          >
            -
          </button>
          <span className="text-xl">{count}</span>
          <button
            className="pl-3  text-3xl text-orange-primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button
          className="col-span-3 flex items-center justify-center gap-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-600 md:col-span-1"
          onClick={handleAddToCart}
        >
          <CartIcon className="fill-white" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
