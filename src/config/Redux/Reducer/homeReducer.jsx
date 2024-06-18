// HOME REDUCER
const initialStateHome = {
  dataBlog: [],
};
const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlog: action.payload,
    };
  }
  return state; // Pastikan mengembalikan state default jika tidak ada action yang cocok
};

export default homeReducer;
