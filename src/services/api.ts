import axios from "axios";

const baseUrl = 'https://api.vandvietnam.com/api/pokemon-api';

const config = {
    address: baseUrl,
    port: "",
    basePath: "",
    axiosConfig: {
        baseURL: baseUrl,
        headers: {},
        withCredentials: false,
        crossDomain: true,
        timeout: 60000,
    },
    getEndpointUrl() {
        return this.address + (this.basePath ? this.basePath : "");
    },
};

const $http = axios.create(config.axiosConfig);

const sendGetOnce = async (url: string, params = {}, headers = null) => {
    try {
        const response = await $http.get(url, { params, timeout: 600000 });
        return response;
    } catch (e: any) {
        if (e.response) {
            return e.response;
        } else if (e.toString().includes("Network Error")) {
            return "NETWORK_ERROR";
        } else {
            return null;
        }
    }
};

export {
    sendGetOnce,
};
