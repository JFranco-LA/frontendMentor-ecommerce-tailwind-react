import DetailsProduct from "@/components/product/details/DetailsProduct";
import GalleryProduct from "@/components/product/gallery/GalleryProduct";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const productImgs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const productImgsSmall = [
  imgProductSmall1,
  imgProductSmall2,
  imgProductSmall3,
  imgProductSmall4,
];

const objectProducts = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
  subtitle: "SNEAKER COMPANY",
  price: 250,
  discount: 0.5,
  imagesMain: productImgs,
  imagesSmall: productImgsSmall,
};

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <GalleryProduct
        productImgs={objectProducts.imagesMain}
        productImgsSmall={objectProducts.imagesSmall}
      />
      <DetailsProduct objectProducts={objectProducts} />
    </main>
  );
};

export default MainProduct;
