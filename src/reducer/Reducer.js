const reducer = (product, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return action.payload;

    default:
      return product;
  }
};

export default reducer;
