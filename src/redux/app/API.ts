import { api } from "../_axios";

const home = () => api.get('api/v1/home');
const details = (data: any) => api.get(`api/v1/clinics/${data}`);

const reviews = (id: any) => api.get(`api/v1/reviews/clinic/${id}`);
const addReview = (data: any) => api.post(`api/v1/reviews/create`, data);
const updateReview = (data: any,) => api.put(`api/v1/reviews`, data);
const deleteReview = (id: any) => api.delete(`api/v1/reviews/${id}`);

const clinics = (page: number, limit: number, category: any) => api.get(`api/v1/clinics?page=${page}&limit=${limit}&category=${category}`);
const articles = (page: number, limit: number,) => api.get(`api/v1/articles?page=${page}&limit=${limit}`);
const saves = () => api.get(`api/v1/user/saves`);
const changeSaves = (id: any) => api.put(`api/v1/user/saves`, { articleId: id });
const favorites = () => api.get(`api/v1/user/favorites`);
const changeFavorites = (id: any) => api.put(`api/v1/user/favorites`, { clinicId: id });

const search = (body: any) => api.get(`api/v1/clinics/search?${body}`);
const contactUs = (body: any) => api.post(`api/v1/contact`, body);



const AppAPI = {
  home,
  details,

  reviews,
  addReview,
  updateReview,
  deleteReview,

  clinics,
  articles,
  saves,
  changeSaves,
  favorites,
  changeFavorites,

  contactUs,
  search
};

export default AppAPI;
