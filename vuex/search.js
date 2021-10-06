import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        provinces: [],
        districts: [],
        wards: [],
        areas: {},
        prices: {},
        typeRealEstate: [],
        directions: [],
        houseType: [],
    },
    mutations: {
        setProvince(state, data) {
            state.provinces = data;
        },
        setDistrict(state, data) {
            state.districts = data;
        },
        setWard(state, data) {
            state.wards = data;
        },
        setAreas(state, data) {
            state.areas = data;
        },
        setPrices(state, data) {
            // state.prices = Object.assign({},data);
            state.prices = { 0:"0", 10: "10", 20: "20",40: "40", 60:"60", 80:"80", 100:">100"}
        },

        setTypeRealEstate(state, data) {
            state.typeRealEstate = data;
        },
        setDirections(state, data) {
            state.directions = data;
        },
        setHouseType(state, data){
            state.houseType = data.dictionaries;
            console.log(state.houseType);
;        }
    },
    actions: {
        getProvince: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'getProvince', method: "GET"})
                .then(response => {
                    commit('setProvince', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
        getDistrict: ({ commit }, province_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'getDistrict/byProvince/' + province_id, method: "GET"})
                .then(response => {
                    commit('setDistrict', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
        getWard: ({ commit }, district_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'getWard/byDistrict/' + district_id, method: "GET"})
                .then(response => {
                    commit('setWard', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
        getAreas: ({ commit }, district_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'getAreas', method: "GET"})
                .then(response => {
                    commit('setAreas', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
        getPrices: ({ commit }, district_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'getPrices', method: "GET"})
                .then(response => {
                    commit('setPrices', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
        getTypeRealEstate: ({ commit }, district_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'getTypeRealEstate', method: "GET"})
                .then(response => {
                    commit('setTypeRealEstate', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
        getDirections: ({ commit }, district_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'getDirections', method: "GET"})
                .then(response => {
                    commit('setDirections', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
        getHouseType:  ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'dictionary-types/2', method: "GET"})
                .then(response => {
                    commit('setHouseType', response.data.results);
                    resolve(response.data);
                })
                .catch(e => {
                    // commit('showError', e.response.data);
                    reject(e);
                })
            })
        },
    }
}