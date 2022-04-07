import Products from "./Products";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { StyledButtonBig, ButtonContainer } from "../styles.js/Button.styled";
import { ShopContainer, ShopHeader } from "../styles.js/Shop.styled";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function Shop(props) {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const navigateTo = (switchPage) => {
    setPage(switchPage);
  };

  return (
    <>
      <ShopHeader>
        <h2>Store</h2>
      </ShopHeader>
      <ShopContainer>
        <ButtonContainer>
          <StyledButtonBig onClick={() => navigateTo(PAGE_CART)}>
            Go to Cart ({getCartTotal()})
          </StyledButtonBig>
          <StyledButtonBig onClick={() => navigateTo(PAGE_PRODUCTS)}>
            View Paintings
          </StyledButtonBig>
        </ButtonContainer>
        {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
        {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
      </ShopContainer>
    </>
  );
}

export default Shop;
