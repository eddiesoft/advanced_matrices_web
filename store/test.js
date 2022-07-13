export const state = () => ({
    falseList: [
        2,
        4,
        5,
        2,
        1,
        2,
        4,
        6,
        2,
        5,
        3,
        2,
        5,
        6,
        7,
        3,
        1,
        2,
        5,
        7,
        4,
        1,
        5,
        4,
        6,
        4,
        6,
        4,
        1,
        8,
        3,
        6,
        1,
        2,
        4,
        7
    ],
    correctAnswersList: [
        5,
        1,
        7,
        4,
        3,
        1,
        6,
        1,
        8,
        4,
        5,
        6,
        2,
        1,
        2,
        4,
        6,
        7,
        3,
        8,
        8,
        7,
        6,
        3,
        7,
        2,
        7,
        5,
        6,
        5,
        4,
        8,
        5,
        1,
        3,
        2
    ],
    iqScoreList: [
        85,
        86,
        87,
        88,
        89,
        90,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        102,
        104,
        105,
        106,
        107,
        109,
        111,
        113,
        115,
        117,
        119,
        121,
        123,
        124,
        127,
        131,
        132,
        133,
        136
    ],
    answersList: [
        2,
        4,
        5,
        2,
        1,
        2,
        4,
        6,
        2,
        5,
        3,
        2,
        5,
        6,
        7,
        3,
        1,
        2,
        5,
        7,
        4,
        1,
        5,
        4,
        6,
        4,
        6,
        4,
        1,
        8,
        3,
        6,
        1,
        2,
        4,
        7
    ],
    appropriateIndexList: [],
    correctRemainingList: [],
    wrongRemainingList: [],
})

export const mutations = {
    ADD(state, { currentItem, selectedOption }) {
        state.answersList.splice(currentItem, 1, selectedOption);
    },
    CLEAR_ANSWERS_LIST(state) {
        state.answersList = [...state.falseList];
    },
    CLEAR_APP_COR_WRONG_LISTS(state) {
        state.appropriateIndexList = [];
        state.correctRemainingList = [];
        state.wrongRemainingList = [];
    },
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
    add({ commit }, payload) {
        commit('ADD', payload)
    },
    clearAnswersList({ commit }) {
        commit('CLEAR_ANSWERS_LIST')
    },
    clearAppCorWrongLists({ commit }) {
        commit('CLEAR_APP_COR_WRONG_LISTS')
    },
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
    falseList: (state) => state.falseList,
    answersList: (state) => state.answersList,
    correctAnswersList: (state) => state.correctAnswersList,
    iqScoreList: (state) => state.iqScoreList,
    appropriateList: (state) => state.appropriateIndexList,
    correctList: (state) => state.correctRemainingList,
    wrongList: (state) => state.wrongRemainingList,
}