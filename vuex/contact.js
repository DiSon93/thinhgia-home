import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        contactType: {}
    },
    mutations: {
        setContactType(state, data) {
            state.contactType = data;
        }
    },
    actions: {
        getContactType: ({ commit }, contact_type_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'contact/' + contact_type_id, method: "GET"})
                    .then(response => {
                        commit('setContactType', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        postcontact: ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'contact/', data: data, method: "POST"})
                    .then(response => {
                        // commit('getBlogList', response.data.results);
                        resolve({
                            status: 200,
                            message: response.data.message
                        });
                    })
                    .catch(e => {
                        resolve({
                            status: 422,
                            message: e.response.data.message
                        });
                        // commit('showError', e.response.data);
                        // reject(e);
                    })
            })
        },
        postNewsLetter: ({ commit }, email) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'contact/news-letter', data: { email: email }, method: "POST"})
                    .then(response => {
                        // commit('getBlogList', response.data.results);
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