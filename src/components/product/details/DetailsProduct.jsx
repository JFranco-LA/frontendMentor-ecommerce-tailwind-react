import CartIcon from "@/components/icons/CartIcon";

export default () => {
  return (
    <section className="container mx-auto flex flex-col gap-4 px-4 md:px-0">
      <p className="font-bold uppercase tracking-wider text-orange-primary">
        Sneaker Company
      </p>
      <h2 className="text-3xl font-bold">Fall Limited Edition Sneakers</h2>
      <p className="text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-0">
        <span className="text-3xl">$125.00</span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          50%
        </span>
        <span className="text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left">
          $250.00
        </span>
      </div>
      <div className="grid grid-cols-3 gap-y-4 font-bold md:grid-cols-[1fr_1.5fr]">
        <div className="col-span-3 flex items-baseline justify-between rounded-lg bg-light-grayish-blue py-2 px-5 pb-3 md:col-span-1">
          <button className="pr-3 text-3xl text-orange-primary">-</button>
          <span className="text-xl">0</span>
          <button className="pl-3  text-3xl text-orange-primary">+</button>
        </div>
        <button className="col-span-3 flex items-center justify-center gap-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-600 md:col-span-1">
          <CartIcon className="fill-white" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
