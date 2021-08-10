import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        projectList: {
            projects: [],
            real_estates: []
        },
        unit_prices: {
            ty: 'tỷ',
            trieu: 'triệu'
        }
    },
    mutations: {
        getProjectList(state, data) {
            state.projectList = data;
        },
    },
    actions: {
        getProject: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'projects/latest', method: "GET"})
                    .then(response => {
                        commit('getProjectList', response.data.results);
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