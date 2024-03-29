import AuthAPI from './API';
import { createAsyncThunk } from '@reduxjs/toolkit';

const doSignIn: any = createAsyncThunk<any, any, any>(
  'auth/login',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.signIn(data);
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)


const doSignUp: any = createAsyncThunk<any, any, any>(
  'auth/signUp',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.signUp(data);
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)



const doVerify: any = createAsyncThunk<any, any, any>(
  'auth/verify',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.verify(data);
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)


const doValidateOTP: any = createAsyncThunk<any, any, any>(
  'auth/validateOTP',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.validateOTP(data);
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

const doForgetPassword: any = createAsyncThunk<any, any, any>(
  'auth/forgetPassword',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.forgetPassword(data);
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)



const doResetPassword: any = createAsyncThunk<any, any, any>(
  'auth/resetPassword',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.resetPassword(data);
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)


const doChangePassword: any = createAsyncThunk<any, any, any>(
  'auth/changePassword',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.changePassword(data);
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)



const doResendVerify: any = createAsyncThunk<any, any, any>(
  'auth/resendVerify',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.resendVerify(data);
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)


const doGetProfile: any = createAsyncThunk<any, any, any>(
  'auth/profile',
  async (_: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.profile();
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)


const doEditProfile: any = createAsyncThunk<any, any, any>(
  'auth/editProfile',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.editProfile(data);
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)



const doGetGovernorates: any = createAsyncThunk<any, any, any>(
  'auth/governorates',
  async (_: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.governorates();
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)



const doGetCities: any = createAsyncThunk<any, any, any>(
  'auth/cities',
  async (id: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.cities(id);
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
) 



const doUploadImage: any = createAsyncThunk<any, any, any>(
  'auth/uploadImage',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.uploadImage(data);
      // alert(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 409 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
const AuthThunks = {
  doSignIn,
  doSignUp,
  doVerify,
  doForgetPassword,
  doResetPassword,
  doChangePassword,
  doResendVerify,
  doValidateOTP,
  doGetProfile,
  doEditProfile,
  
  doGetGovernorates,
  doGetCities,

  doUploadImage,
};

export default AuthThunks;
