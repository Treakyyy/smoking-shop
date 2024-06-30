import { configureStore, createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: { blogRef: null, productRef: null, aboutUsRef: null },
  reducers: {
    setBlogRef: (state, action) => {
      state.blogRef = action.payload;
    },

    setProductRef: (state, action) => {
      state.productRef = action.payload
    },

    setAboutUsRef: (state, action) => {
        state.aboutUsRef = action.payload
    },

    scrollToBlog: (state) => {
      if (state.blogRef) {
        state.blogRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },

    scrollToProduct: (state) => {
      if(state.productRef) {
        state.productRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },

    scrollToAboutUs: (state) => {
      if(state.aboutUsRef) {
        state.aboutUsRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  },
});

export const { setBlogRef, scrollToBlog, setProductRef, scrollToProduct, setAboutUsRef, scrollToAboutUs } = scrollSlice.actions;

const store = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
  },
});

export default store;
