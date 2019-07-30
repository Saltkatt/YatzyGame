const state = {
    dice: [
        {
            id: 0,
            value: 1,
            isLocked: false,
            isSelected: false
        },
        {
            id: 1,
            value: 2,
            isLocked: false,
            isSelected: false
        },
        {
            id: 2,
            value: 3,
            isLocked: false,
            isSelected: false
        },
        {
            id: 3,
            value: 4,
            isLocked: false,
            isSelected: false
        },
        {
            id: 4,
            value: 5,
            isLocked: false,
            isSelected: false
        }
       
    ],
     // Array for protocol one.
     protocolOne: [
        {
            id: 1, 
            name: 'Aces', 
            value: null, 
            isSelected: false
        },
        {
            id: 2, 
            name: 'Twos', 
            value: null, 
            isSelected: false
        },
        {
            id: 3, 
            name: 'Threes', 
            value: null, 
            isSelected: false
        },
        {
            id: 4, 
            name: 'Fours', 
            value: null, 
            isSelected: false
        },
        {
            id: 5, 
            name: 'Fives', 
            value: null, 
            isSelected: false
        },
        {
            id: 6, 
            name: 'Sixes', 
            value: null, 
            isSelected: false
        },
        {
            id: 7, 
            name: 'Total', 
            value: null, 
            isSelected: false
        },
        {
            id: 8, 
            name: 'Bonus', 
            value: null, 
            isSelected: false
        },
      ],
      // Array for protocol two.
      protocolTwo: [
        {
            id: 1, 
            name: 'Pair', 
            value: null, 
            isSelected: false
        },
        {
            id: 2, 
            name: 'Two Pairs', 
            value: null, 
            isSelected: false
        },
        {
            id: 3, 
            name: 'Three Of A Kind', 
            value: null, 
            isSelected: false
        },
        {
            id: 4, 
            name: 'Four Of A Kind', 
            value: null, 
            isSelected: false
        },
        {
            id: 5, 
            name: 'Full House', 
            value: null, 
            isSelected: false
        },
        {
            id: 6, 
            name: 'Small Straight', 
            value: null, 
            isSelected: false
        },
        {
            id: 7, 
            name: 'Big Straight', 
            value: null, 
            isSelected: false
        },
        {
            id: 8, 
            lname: 'Yatzy', 
            value: null, 
            isSelected: false
        },
        {
            id: 9, 
            name: 'Chance', 
            value: null, 
            isSelected: false
        },
        {
            id: 10, 
            name: 'Total', 
            value: 0, 
            isSelected: false
        },
      ],

      // Counter allowing three rolls of the dice.
      counter: 0,

      isRollButtonLocked: false,

      


    

    

}
const getters = {
    allDice: (state) => state.dice,
    counter: (state) => state.counter,
    getLockedRollButton: (state) => state.isRollButtonLocked,
    
}
const actions = {};
const mutations = {
    // This function rolls tha dice and allows it to roll three times.
    rollDice: (state, nr) => {
        var rand = Math.ceil(Math.random()*6)
        state.dice[nr].value = rand;
    },
    changeLock: (state, nr) => {
        state.dice[nr].isLocked = !state.dice[nr].isLocked;
    },
    increaseCounter: (state) => {
        state.counter++
    },
    resetCounter: (state) => {
        state.counter = 0
    },

};

export default{
    state,
    getters,
    actions,
    mutations
};