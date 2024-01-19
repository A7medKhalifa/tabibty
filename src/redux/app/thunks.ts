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
      const response = await AppAPI.clinics(data?.page, data?.limit, data?.category);
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
  async (_: any, thunkApi: any) => {
    try {
      const response = await AppAPI.saves();
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



const doGetChangeSaves: any = createAsyncThunk<any, any, any>(
  'auth/changeSaves',
  async (id: any, thunkApi: any) => {
    try {
      const response = await AppAPI.changeSaves(id);
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



const doGetFavorites: any = createAsyncThunk<any, any, any>(
  'auth/favorites',
  async (_: any, thunkApi: any) => {
    try {
      const response = await AppAPI.favorites();
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




const doChangeFavourites: any = createAsyncThunk<any, any, any>(
  'auth/changeFavorites',
  async (id: any, thunkApi: any) => {
    try {
      const response = await AppAPI.changeFavorites(id);
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


const doContactUs: any = createAsyncThunk<any, any, any>(
  'auth/contactUs',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.contactUs(data);
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

const doGetDetails: any = createAsyncThunk<any, any, any>(
  'auth/details',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.details(data);
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

const doGetReviews: any = createAsyncThunk<any, any, any>(
  'auth/reviews',
  async (id: any, thunkApi: any) => {
    try {
      const response = await AppAPI.reviews(id);
      console.error(JSON.stringify(id))
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

const doAddReview: any = createAsyncThunk<any, any, any>(
  'auth/addReview',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.addReview(data);
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

const doUpdateReview: any = createAsyncThunk<any, any, any>(
  'auth/updateReview',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.updateReview(data);
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

const doDeleteReview: any = createAsyncThunk<any, any, any>(
  'auth/deleteReview',
  async (id: any, thunkApi: any) => {
    try {
      const response = await AppAPI.deleteReview(id);
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

const doSearch: any = createAsyncThunk<any, any, any>(
  'auth/search',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AppAPI.search(data);
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
  doGetDetails,

  doGetReviews,
  doAddReview,
  doUpdateReview,
  doDeleteReview,

  doGetClinics,
  doGetArticles,
  doGetSaves,
  doGetChangeSaves,
  doGetFavorites,
  doChangeFavourites,
  doContactUs,
  doSearch
};

export default AppThunks;
