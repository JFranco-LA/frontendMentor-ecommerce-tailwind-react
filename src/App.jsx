import IndexHeader from "./components/header/IndexHeader";
import IndexProduct from "./components/product/IndexProduct";

import CartModalProvider from "@/context/useCartModal";

const App = () => {
  return (
    <CartModalProvider>
      <IndexHeader />
      <IndexProduct />
    </CartModalProvider>
  );
};

export default App;
