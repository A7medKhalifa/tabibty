import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import Toast from "react-native-toast-message";
import { initialState } from './types';




const slice = createSlice({
  name: EntityKeys.APP,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    changeDone: (state, action) => { state.done = action.payload },
    changeEdit: (state, action) => { state.edit = action.payload },
    changeComment: (state, action) => { state.comment = action.payload },
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


    //doGetDetails
    builder.addCase(thunks.doGetDetails.fulfilled, (state, action) => {
      state.details = action.payload?.data
    });
    builder.addCase(thunks.doGetDetails.rejected, (state, action: any) => {
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

    //doGetSaves
    builder.addCase(thunks.doGetSaves.fulfilled, (state, action) => {
      state.Saves = action.payload?.data
    });
    builder.addCase(thunks.doGetSaves.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })

    //doGetFavorites
    builder.addCase(thunks.doGetFavorites.fulfilled, (state, action) => {
      state.Favourites = action.payload?.data
    });
    builder.addCase(thunks.doGetFavorites.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })

    //doContactUs
    builder.addCase(thunks.doContactUs.fulfilled, (state, action) => {
      state.done = true
      Toast.show({
        type: "success",
        text1: 'لم ارسال الشكوي بنجاح',
      })
    });
    builder.addCase(thunks.doContactUs.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })


    //doSearch
    builder.addCase(thunks.doSearch.fulfilled, (state, action) => {
      state.Search = action?.payload.data
    });
    builder.addCase(thunks.doSearch.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })

    //doGetReviews
    builder.addCase(thunks.doGetReviews.fulfilled, (state, action) => {
      state.reviews = action?.payload.data
    });
    builder.addCase(thunks.doGetReviews.rejected, (state, action: any) => {
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
  changeDone: slice.actions.changeDone,
  changeEdit: slice.actions.changeEdit,
  changeComment: slice.actions.changeComment
};

export const selectHomeData = (state: RootState) => state.app.HomeData;
export const selectClinics = (state: RootState) => state.app.Clinics;
export const selectArticles = (state: RootState) => state.app.Articles;
export const selectSaves = (state: RootState) => state.app.Saves;
export const selectFavourites = (state: RootState) => state.app.Favourites;
export const selectDone = (state: RootState) => state.app.done;
export const selectDetails = (state: RootState) => state.app.details;
export const selectSearch = (state: RootState) => state.app.Search;
export const selectReviews = (state: RootState) => state.app.reviews;
export const selectEdit = (state: RootState) => state.app.edit;
export const selectComment = (state: RootState) => state.app.comment;

export default AppSlice;
