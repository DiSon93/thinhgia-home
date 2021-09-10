import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        
    },
    mutations: {
        
    },
    actions: {
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
        },
    }
}