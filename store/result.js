export const state = () => ({
    appropriateIndexList: [],
    correctRemainingList: [],
    wrongRemainingList: [],
})

export const mutations = {
    ADD_APPROPRIATE(state, payload) {
        state.appropriateIndexList.push(payload);
    },
    ADD_CORRECT(state, payload) {
        state.correctRemainingList.push(payload);
    },
    ADD_WRONG(state, payload) {
        state.wrongRemainingList.push(payload);
    },
}

export const actions = {
    addAppropriate({ commit }, payload) {
        commit('ADD_APPROPRIATE', payload)
    },
    addCorrect({ commit }, payload) {
        commit('ADD_CORRECT', payload)
    },
    addWrong({ commit }, payload) {
        commit('ADD_WRONG', payload)
    },
}

export const getters = {
    appropriateList: (state) => state.appropriateIndexList,
    correctList: (state) => state.correctRemainingList,
    wrongList: (state) => state.wrongRemainingList,
}