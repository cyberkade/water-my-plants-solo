export const initialState = {
  plant_id: 0,
  plant_name: "",
  plant_species: "",
  h2oFrequency: 0,
  image: "",
};

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default plantsReducer;
