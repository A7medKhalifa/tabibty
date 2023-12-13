import AppAPI from './API';
import { createAsyncThunk } from '@reduxjs/toolkit';

const doGetHomeData: any = createAsyncThunk<any, any, any>(
  'auth/home',
  async (_: any, thunkApi: any) => {
    try {
      const response = await AppAPI.home();
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


const doGetClinics: any = createAsyncThunk<any, any, any>(
  'auth/clinics',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.clinics(data?.page, data?.limit);
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



const doGetArticles: any = createAsyncThunk<any, any, any>(
  'auth/articles',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.articles(data?.page, data?.limit);
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



const doGetSaves: any = createAsyncThunk<any, any, any>(
  'auth/saves',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.saves();
      console.log(JSON.stringify(response.data))
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



const doGetChangeSaves: any = createAsyncThunk<any, any, any>(
  'auth/changeSaves',
  async (id: any, thunkApi: any) => {
    try {
      const response = await AppAPI.changeSaves(id);
      console.log(JSON.stringify(response.data))
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
const AppThunks = {
  doGetHomeData,
  doGetClinics,
  doGetArticles,
  doGetSaves,
  doGetChangeSaves
};

export default AppThunks;
