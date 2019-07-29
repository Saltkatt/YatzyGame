const state = {
    dice: [
        {
            id: 0,
            value: 1,
            isLocked: false
        },
        {
            id: 1,
            value: 2,
            isLocked: false
        },
        {
            id: 2,
            value: 3,
            isLocked: false
        },
        {
            id: 3,
            value: 4,
            isLocked: false
        },
        {
            id: 4,
            value: 5,
            isLocked: false
        }
       
    ],
}
const getters = {
    allDice: (state) => state.dice,
}
const actions = {};
const mutations = {};

export default{
    state,
    getters,
    actions,
    mutations
};