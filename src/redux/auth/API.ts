import { api } from "../_axios";

const signIn = (data: any) => api.post('api/v1/auth/login', data);
const signUp = (data: any) => api.post('api/v1/auth/signup', data);
const verify = (data: any) => api.put('api/v1/auth/verify', data);
const resendVerify = (data: any) => api.post('api/v1/auth/verify/resend', data);
const forgetPassword = (data: any) => api.post('api/v1/auth/forget-password', data);
const resetPassword = (data: any) => api.put('api/v1/auth/reset-password', data);

const governorates = () => api.get('api/v1/area/governorates?lang=ar');
const cities = (id: number) => api.get(`api/v1/area/governorates/cities?lang=ar&governorateId=${id}`,);


const AuthAPI = {
  signIn,
  signUp,
  verify,
  resendVerify,
  forgetPassword,
  resetPassword,

  governorates,
  cities
};

export default AuthAPI;
