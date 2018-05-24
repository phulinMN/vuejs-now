import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                if (!process.client) {
                    console.log(context.req.session)
                }
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { 
                                id: '1', 
                                title: '1st Post', 
                                previewText: 'This is our 1st post!', 
                                thumbnail: 'http://www.biznespreneur.com/wp-content/uploads/2017/06/t.jpg'
                            },
                            { 
                                id: '2', 
                                title: '2nd Post', 
                                previewText: 'This is our 2nd post!', 
                                thumbnail: 'http://www.biznespreneur.com/wp-content/uploads/2017/06/t.jpg'
                            }
                        ])
                        resolve();
                    }, 1000);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore