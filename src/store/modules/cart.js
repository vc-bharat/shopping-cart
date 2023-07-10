export default {
    state: {
        cartItems: []
    },
    getters: {
        getCartItems: (state) => state.cartItems,
        getCartTotal: (state) => {
            return state.cartItems.reduce((total, item) => total + item.price, 0);
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART',product);
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId);
        }
    },
    mutations: {
        ADD_TO_CART(state, product) {
            state.cartItems.push(product);
        },
        REMOVE_FROM_CART(state, productId) {
            state.cartItems = state.cartItems.filter((item) => item.id !== productId);
        }
    },
};