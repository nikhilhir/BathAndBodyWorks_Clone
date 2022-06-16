export const AUTH = "AUTH";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const ADDRESS_DATA = "ADDRESS_DATA";

export const authUser = (status) => {
  return {
    type: "AUTH",
    payload: status,
  };
};

export const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};

export const addressData = (data) => {
    return {
        type: "ADDRESS_DATA",
        payload: data,
    }
}
