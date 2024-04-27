import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    username: '',
    email: '',
    password:'',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData(state, action) {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
  },
});

export const { updateFormData } = formSlice.actions;

export default formSlice.reducer;