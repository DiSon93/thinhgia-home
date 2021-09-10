import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        blogList: [],
        blogCategory: {},
        blogCategoryList: {
            data: []
        },
        blogMostViewed: {
            data: []
        },
        blogDetail: {},
    },
    mutations: {
        getBlogList(state, data) {
            state.blogList = data;
        },
        getBlogCategory(state, data) {
            state.blogCategory = data;
        },
        getBlogCategoryList(state, data) {
            state.blogCategoryList = data;
        },
        getBlogDetail(state, data) {
            state.blogDetail = data;
        },
        getMostViewed(state, data) {
            state.blogMostViewed = data;
        }
    },
    actions: {
        getBlogs: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'blogs', method: "GET"})
                    .then(response => {
                        commit('getBlogList', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getBlogCategory: ({ commit }, blog_type_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'blogs/category/' + blog_type_id, method: "GET"})
                    .then(response => {
                        commit('getBlogCategory', response.data.results.category);
                        commit('getBlogCategoryList', response.data.results.blogs);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getBlogDetail: ({ commit }, blog_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'blogs/detail/' + blog_id, method: "GET"})
                    .then(response => {
                        commit('getBlogDetail', response.data.results);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // commit('showError', e.response.data);
                        reject(e);
                    })
            })
        },
        getMostViewed: ({ commit }, blog_id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: 'blogs/mostviewed', method: "GET"})
                    .then(response => {
                        commit('getMostViewed', response.data.results);
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