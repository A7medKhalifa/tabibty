import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState } from './types';




const slice = createSlice({
  name: EntityKeys.APP,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    // changeIsSignedUp: (state, action) => { state.HomeData = action.payload },
  },
  extraReducers: builder => {
    //doGetHomeData
    builder.addCase(thunks.doGetHomeData.fulfilled, (state, action) => {
      state.HomeData = action.payload?.data
    });
    builder.addCase(thunks.doGetHomeData.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })


    //doGetClinics
    builder.addCase(thunks.doGetClinics.fulfilled, (state, action) => {
      state.Clinics = action.payload?.data

    });
    builder.addCase(thunks.doGetClinics.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })


    //doGetArticles
    builder.addCase(thunks.doGetArticles.fulfilled, (state, action) => {
      state.Articles = action.payload?.data
    });
    builder.addCase(thunks.doGetArticles.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })

    //doGetArticles
    builder.addCase(thunks.doGetSaves.fulfilled, (state, action) => {
      state.Saves = action.payload?.data
    });
    builder.addCase(thunks.doGetSaves.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })
  }
})

const AppSlice = {
  thunks,
  slice,
  logout: slice.actions.logout,
  // changeIsSignedUp: slice.actions.changeIsSignedUp,
};

export const selectHomeData = (state: RootState) => state.app.HomeData;
export const selectClinics = (state: RootState) => state.app.Clinics;
export const selectArticles = (state: RootState) => state.app.Articles;
export const selectSaves = (state: RootState) => state.app.Saves;

export default AppSlice;
