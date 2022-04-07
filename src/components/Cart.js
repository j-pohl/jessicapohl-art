import { ImageContainer, StyledShop } from "../styles.js/Shop.styled";
import {
  StyledButtonSmall,
  StyledButtonBig,
  ButtonArrowUp,
  ButtonArrowDown,
} from "../styles.js/Button.styled";
import {
  StyledHeader,
  StyledHeaderTotalSum,
  QuantityContainer,
} from "../styles.js/Cart.styled";

const Cart = ({ cart, setCart }) => {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <StyledShop>
      <StyledHeader>
        <h1>Cart</h1>
      </StyledHeader>
      <StyledHeaderTotalSum>Total Cost: ${getTotalSum()}</StyledHeaderTotalSum>
      <StyledHeader>
        <>
          {cart.length !== 0 && (
            <StyledRemoveButton onClick={() => clearCart()}>
              Remove All Items
            </StyledRemoveButton>
          )}
        </>
      </StyledHeader>

      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <h4>${product.cost}</h4>
          <ImageContainer src={product.image} alt={product.name} />
          <br />
          <QuantityContainer>
            <ButtonArrowUp>
              ⬆
            </ButtonArrowUp>
            <h4>Quantity: {product.quantity}</h4>
            <ButtonArrowDown>
              ⬇
            </ButtonArrowDown>
          </QuantityContainer>{" "}
          <br />
          <StyledButtonSmall onClick={() => removeFromCart(product)}>
            Remove
          </StyledButtonSmall>
        </div>
      ))}
    </StyledShop>
  );
};

export default Cart;
