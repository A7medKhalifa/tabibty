import axios, { AxiosError, AxiosRequestConfig } from "axios";

import assign from "lodash/assign"

import { create } from "apisauce"
import { TStore } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from '../../.env.json'


export const api = create({
    baseURL: BASE_URL,
    headers: {
        "Accept": "application/json",
    }
})


const initAxios = (store: TStore) => {
    api.axiosInstance.interceptors.request.use(async (config: any) => {

        const token: any = await AsyncStorage.getItem("USER_TOKEN")

        if (token) {
            assign(config.headers, {
                "Authorization": token
            });
        }
        return config;
    })

    const injectAuthHeaders: any = async (config: AxiosRequestConfig) => {
        const token: any = await AsyncStorage.getItem("USER_TOKEN");
        // const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODNmZDljMzQxNTE4OGQzMmZkOTlhZWVhMzRjOTM4YzVlMjI5MTEwMTVkMTQ5OThmNzhmNjA3OTIyMDJkYzdlNmM4ODhlYWM1ZDM2NjBhM2EiLCJpYXQiOjE3MDEzNDQ2NDEuOTY4Njk0LCJuYmYiOjE3MDEzNDQ2NDEuOTY4NzAyLCJleHAiOjE3MzI5NjcwNDEuOTUyMDk1LCJzdWIiOiIyNiIsInNjb3BlcyI6W119.SjDX4SZMpkfoRorPex52e4AW37DKqoek58FxJ0qT13qgg0XmcnNSiFJGgX8n8DjjLgsuP3PcGit9EtylJfWTJPOTR6pHHRMgKkgjkupdeYblUwmPuoOE2yRnKNcM3wmjMhUOTg0WNUAKivltrhSdgbrsFAyiEWoE-9xyknTjiLG494LlsI7lckDjDRf0h8SLP6zzygwIfAWE02KEKlSd0CETHyj8uFhicsRMUtypEOg69rn5NofuzrL7Kz55akT7AbwRikNlIPHJ-tRNBaI2L2xnD9qn2Kh_FvFlTX_mqRUc7N8P49JovhnaknhnWsxj9kPhrbveJMb7bMiTUH4b-EMt8JnbKkUSW2RQ4kH3ruXTY_YuIhE0ExgIaQji_ifRLgYNbKaZ4pA6yQLn1cMNq0dKgT33jO2NQOvcVCmyLeA43bjDoROTTzOoYq7GSZVkfHx6NS1gAARMYBJSLboo-GeYcfXyhzLTqPbmmHk7NPcll4pCtt17I02S92V9h3dvQfB1n_1GK-7qccUMTHtWb_NOBDweW7Kanajd93qhmb-cUYMsvaWukvxQYcVb3BPc5Yy2GY45mGBrqk6BgJxw-Ity8KF2MktEEFiDf115GWNqkGSPFVyGBwn0RoEnIvvxpD7zrHzH7675vOutbJx0-OuvuM_UUE7sIysW1c-j_v8'
        const Authorization = `Bearer ${token}`;
        const authHeaders = { Authorization, };
        // assign(config.headers, authHeaders);
        assign(config.headers, {
            "Authorization": authHeaders
        });
        return config;
    };


    const unautherizedHandling = (error: AxiosError) => {
        const { status, data } = (error?.response as any) || {};
        //error handling
    };

    const handleFormData: any = async (config: AxiosRequestConfig) => {

        if (config.data instanceof FormData) {
            assign(config.headers, {
            });
        }
        return config;
    };



    axios.defaults.baseURL = BASE_URL;
    axios.interceptors.request.use(injectAuthHeaders);
    axios.interceptors.response.use(undefined, error => {
        unautherizedHandling(error);
        return Promise.reject(error?.response);
    });
    axios.interceptors.request.use(handleFormData);
};

export default initAxios;
