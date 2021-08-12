import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        dictionaryList: {
            real_estate: [],
            project: []
        },
        dictionaryItem: {},
        isPurpose: {
            sell: 0,
            rent: 1
        }
    },
    mutations: {
        getDictionaryList(state, data) {
            try {
                state.dictionaryList[data.name] = data.data;
            } catch (e) {

            }
        },
        getDictionaryItem(state, data) {
            state.dictionaryItem = data;
        }
    },
    actions: {
        getCategory: ({ commit }, name) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'category/' + name, method: "GET"})
                    .then(response => {
                        commit('getDictionaryList', { name: name, data: response.data.results });
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getCategoryItem: ({ commit }, id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'category/id/' + id, method: "GET"})
                    .then(response => {
                        commit('getDictionaryItem', response.data.results);
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