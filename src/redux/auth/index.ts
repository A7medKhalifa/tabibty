import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState } from './types';




const slice = createSlice({
  name: EntityKeys.AUTH,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    changeIsSignedUp: (state, action) => { state.signedUp = action.payload },
    changeIsVerivied: (state, action) => { state.verivied = action.payload },
    changeIsVerivied2: (state, action) => { state.verivied2 = action.payload }
  },
  extraReducers: builder => {
    //doSignIn
    builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
      AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token)
      state.currentUser = action.payload?.data
      state.isAuth = true
    });
    builder.addCase(thunks.doSignIn.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })

    //doSignUp
    builder.addCase(thunks.doSignUp.fulfilled, (state, action) => {
      // AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token)
      // state.currentUser = action.payload?.data
      state.signedUp = true
      Toast.show({
        type: "success",
        text1: action.payload.message,
      })
    });
    builder.addCase(thunks.doSignUp.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })


    //doVerify
    builder.addCase(thunks.doVerify.fulfilled, (state, action) => {
      state.verivied = true
      Toast.show({
        type: "success",
        text1: action.payload.message,
      })
    });
    builder.addCase(thunks.doVerify.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })


    //doForgetPassword
    builder.addCase(thunks.doForgetPassword.fulfilled, (state, action) => {
      state.verivied2 = true
      Toast.show({
        type: "success",
        text1: action.payload.message,
      })
    });
    builder.addCase(thunks.doForgetPassword.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })



    //doResetPassword
    builder.addCase(thunks.doResetPassword.fulfilled, (state, action) => {
      state.signedUp = true
      Toast.show({
        type: "success",
        text1: action.payload.message,
      })
    });
    builder.addCase(thunks.doResetPassword.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })


    //doGetGovernorates
    builder.addCase(thunks.doGetGovernorates.fulfilled, (state, action) => {
      state.governorates = action.payload.data
    });
    builder.addCase(thunks.doGetGovernorates.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })


    //doGetCities
    builder.addCase(thunks.doGetCities.fulfilled, (state, action) => {
      state.cities = action.payload.data
    });
    builder.addCase(thunks.doGetCities.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })
  }
})

const AuthSlice = {
  thunks,
  slice,
  logout: slice.actions.logout,
  changeIsSignedUp: slice.actions.changeIsSignedUp,
  changeIsVerivied: slice.actions.changeIsVerivied,
  changeIsVerivied2: slice.actions.changeIsVerivied2,
};

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectVerivied = (state: RootState) => state.auth.verivied;
export const selectVerivied2 = (state: RootState) => state.auth.verivied2;
export const selectSignedUp = (state: RootState) => state.auth.signedUp;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectCities = (state: RootState) => state.auth.cities;
export const selectGovernorates = (state: RootState) => state.auth.governorates;
export default AuthSlice;
