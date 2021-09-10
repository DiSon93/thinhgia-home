import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        settings: {}
    },
    mutations: {
        setSettings(state, data) {
            state.settings = data;
        }
    },
    actions: {
        getSettings: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'settings', method: "GET"})
                    .then(response => {
                        commit('setSettings', response.data.results);
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