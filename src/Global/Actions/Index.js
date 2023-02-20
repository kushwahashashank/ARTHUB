export const AddToCart = (photo, price, text, id, cartprice, count) => {
  return {
    type: "ADDTOCART",
    item: {
      photo,
      text,
      price,
      id,
      cartprice,
      count,
    },
  };
};
export const RemoveFromCart = (id) => {
  return {
    type: "REMOVEFROMBASKET",
    id,
  };
};
export const DeleteFromCart = (id) => {
  return {
    type: "DELETEFROMBASKET",
    id,
  };
};
