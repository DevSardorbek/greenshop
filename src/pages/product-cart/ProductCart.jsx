import React from "react";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";
import CartCantent from "../../components/cartCantent/CartCantent";

const ProductCart = () => {
  const carts = useSelector((s) => s.cart.value);
  return (
    <div>
      {carts.length ? (
        <CartCantent data={carts} />
      ) : (
        <Empty text={ProductCart} />
      )}
    </div>
  );
};

export default ProductCart;
