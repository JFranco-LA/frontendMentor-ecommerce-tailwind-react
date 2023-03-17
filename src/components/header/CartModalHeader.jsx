import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

export default () => {
  return (
    <section className="absolute top-[125%] right-0 z-10 w-full md:max-w-sm md:top-full">
      <div className="mx-4 rounded-md bg-white shadow-md">
        <h4 className="px-6 py-8 text-lg font-bold md:px-4 md:py-5">Cart</h4>
        <hr />
        <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-8 md:px-4 md:py-5">
          <img src={imgSmall} alt="" className="rounded-md" />
          <div>
            <h6> Fall Limited Edition Sneakers</h6>
            <div>
              <span>$125.00 x3 </span>
              <span className="font-bold">$375.00</span>
            </div>
          </div>
          <button className="ml-auto">
            <DeleteIcon className="hover:fill-orange-primary" />
          </button>
        </div>
        <div className="px-6 pb-8">
          <button className="w-full rounded-md bg-orange-primary py-4 text-white transition-all hover:bg-orange-600">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};
