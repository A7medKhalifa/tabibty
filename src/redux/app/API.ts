import { api } from "../_axios";

const home = () => api.get('api/v1/home');
const clinics = (page: number, limit: number,) => api.get(`api/v1/clinics?page=${page}&limit=${limit}`);
const articles = (page: number, limit: number,) => api.get(`api/v1/articles?page=${page}&limit=${limit}`);
const saves = () => api.get(`api/v1/user/saves`);
const changeSaves = (id: any) => api.put(`api/v1/user/saves`, { articleId: id });


const AppAPI = {
  home,
  clinics,
  articles,
  saves,
  changeSaves
};

export default AppAPI;
