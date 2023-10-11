import * as Type from "../Type/Cart";

export const increaseQuantity = (data) => async (dispatch) => {
  dispatch({
    type: Type.INCREASE_QUALTTY_CART,
    data: data,
  });
};

export const decreaseQuantity = (data) => async (dispatch) => {
  dispatch({
    type: Type.DECREASE_QUALTTY_CART,
    data: data,
  });
};
