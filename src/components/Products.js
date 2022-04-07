import { useState } from "react";
import { StyledShop, ImageContainer } from "../styles.js/Shop.styled";
import { StyledButtonSmall } from "../styles.js/Button.styled";
import flamingos from "../images/shop/flamingos.jpg";
import lion from "../images/shop/lion-acrylic.jpg";
import ocean from "../images/shop/ocean-watercolor.jpg";
import flowers from "../images/shop/flowervase-acrylic.jpg";
import vase from "../images/shop/flowervase-oil.jpg";
import thoughts from "../images/shop/thoughts-acrylic.png";
import wolf from "../images/shop/wolf-acrylic.jpg";

const Products = ({ setCart, cart }, props) => {
  const [products] = useState([
    {
      name: "Wolf",
      descripton: "Acrylic on canvas",
      cost: 2500,
      image: wolf,
    },
    {
      name: "Thoughts",
      cost: 2000,
      image: thoughts,
    },
    {
      name: "Lion",
      cost: 3000,
      image: lion,
    },
    {
      name: "Flamingos",
      cost: 2000,
      image: flamingos,
    },
    {
      name: "Vase",
      cost: 2500,
      image: vase,
    },
    {
      name: "Flowers",
      cost: 2500,
      image: flowers,
    },
    {
      name: "Ocean",
      cost: 1500,
      image: ocean,
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <StyledShop>
      {products.map((product, index) => (
        <div key={index}>
          <ImageContainer src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <h3>{product.description}</h3>
          <h5>${product.cost}</h5>
          <br />
          <StyledButtonSmall onClick={() => addToCart(product)}>
            Add to Cart
          </StyledButtonSmall>
        </div>
      ))}
    </StyledShop>
  );
};

export default Products;
