import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        featureList: {
            data: []
        },
        purposeList: {
            sell: {
                data: []
            },
            rent: {
                data: []
            }
        },
        realEstateList: {
            data: []
        },
        realEstateItem: {},
        unit_prices: {
            ty: 'tỷ',
            trieu: 'triệu'
        }
    },
    mutations: {
        getFeatureList(state, data) {
            state.featureList = data;
        },
        getPurposeList(state, data) {
            state.purposeList[data.isType] = data.data;
        },
        getRealEstateList(state, data) {
            state.realEstateList = data;
        },
        getRealEstateItem(state, data) {
            state.realEstateItem = data;
        }
    },
    actions: {
        getFeature: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'real-estates/feature', method: "GET"})
                    .then(response => {
                        commit('getFeatureList', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getPurpose: ({ commit }, isType='sell') => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'real-estates/type/' + isType, method: "GET"})
                    .then(response => {
                        commit('getPurposeList', { isType: isType, data: response.data.results });
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getRealEstate: ({ commit }, params) => {
            let strParams = '';
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'real-estates/all?' + strParams, method: "GET"})
                    .then(response => {
                        commit('getRealEstateList', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getRealEstateItem: ({ commit }, id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'real-estates/id/' + id, method: "GET"})
                    .then(response => {
                        commit('getRealEstateItem', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        }
    }
}