// GLOBAL REDUCER
const initialState = {
  name: "world",
};
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "hello",
    };
  }
  return state; // Pastikan mengembalikan state default jika tidak ada action yang cocok
};

export default globalReducer;
