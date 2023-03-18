import { useContext } from "react";
import { useCartModal } from "@/context/useCartModal";
import DeleteIcon from "@/components/icons/DeleteIcon";

export default () => {
  const { cartProduct, deleteCartProducts } = useContext(useCartModal);

  return (
    <section className="absolute top-[125%] right-0 z-10 w-full md:top-full md:max-w-sm">
      <div className="mx-4 rounded-md bg-white shadow-md">
        <h4 className="px-6 py-8 text-lg font-bold md:px-4 md:py-5">Cart</h4>
        <hr />

        {cartProduct.length === 0 && (
          <p className="py-8 text-center text-gray-400"> Your cart is empty</p>
        )}

        {cartProduct.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4 md:px-4 md:py-5"
          >
            <img src={product.img} alt="" className="rounded-md" />
            <div>
              <h6> {product.title}</h6>
              <div>
                <span>
                  ${product.discountPrice.toFixed(2)} x {product.quantity}{" "}
                </span>
                <span className="font-bold">
                  ${(product.discountPrice * product.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="ml-auto"
              onClick={() => deleteCartProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
        {cartProduct.length != 0 && (
          <div className="px-6 pb-8">
            <button className="w-full rounded-md bg-orange-primary py-4 text-white transition-all hover:bg-orange-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
