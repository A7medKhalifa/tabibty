import { api2 } from "store/_axios2";
import { api } from "../_axios";

const signIn = (data: any) => api.post('api/v1/auth/login', data);
const signUp = (data: any) => api.post('api/v1/auth/signup', data);
const verify = (data: any) => api.put('api/v1/auth/verify', data);
const validateOTP = (data: any) => api.post('api/v1/auth/validate-otp', data);
const resendVerify = (data: any) => api.post('api/v1/auth/verify/resend', data);
const forgetPassword = (data: any) => api.post('api/v1/auth/forget-password', data);
const resetPassword = (data: any) => api.put('api/v1/auth/reset-password', data);
const changePassword = (data: any) => api.put('api/v1/user/change-password', data);
const profile = () => api.get(`api/v1/user/profile`);
const editProfile = (data: any) => api.put(`api/v1/user/update-data`, data);


const governorates = () => api.get('api/v1/area/governorates?lang=ar');
const cities = (id: number) => api.get(`api/v1/area/governorates/cities?lang=ar&governorateId=${id}`,);
const uploadImage = (data: any) => api2.post(`api/v1/upload/user`, data);



const AuthAPI = {
  signIn,
  signUp,
  verify,
  validateOTP,
  resendVerify,
  forgetPassword,
  resetPassword,
  changePassword,
  profile,
  editProfile,

  governorates,
  cities,
  uploadImage,
};

export default AuthAPI;
