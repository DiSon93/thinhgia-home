import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        projectList: {
            projects: [],
            real_estates: []
        },
        projectDetail: {},
        unit_prices: {
            ty: 'tỷ',
            trieu: 'triệu'
        },

    },
    mutations: {
        setProjectList(state, data) {
            state.projectList = data;
        },
        setProjectDetail(state, data) {
            state.projectDetail = data;
        },
    },
    actions: {
        getProject: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'projects/latest', method: "GET"})
                    .then(response => {
                        commit('setProjectList', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getProjectType: ({ commit }, params) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'projects/type/' + params.type, method: "POST", data: params})
                    .then(response => {
                        commit('setProjectList', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getProjectDetail: ({ commit }, project_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'projects/id/' + project_id, method: "GET"})
                    .then(response => {
                        commit('setProjectDetail', response.data.results);
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