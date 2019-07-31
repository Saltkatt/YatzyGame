
const state = {
    dice: [
        {
            id: 0,
            value: 1,
            isLocked: false,
            selected: false
        },
        {
            id: 1,
            value: 2,
            isLocked: false,
            selected: false
        },
        {
            id: 2,
            value: 3,
            isLocked: false,
            selected: false
        },
        {
            id: 3,
            value: 4,
            isLocked: false,
            selected: false
        },
        {
            id: 4,
            value: 5,
            isLocked: false,
            selected: false
        }
       
    ],
     // Array for protocol one.
     protocolOne: [
        {
            id: 1, 
            name: 'Aces', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 2, 
            name: 'Twos', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 3, 
            name: 'Threes', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 4, 
            name: 'Fours', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 5, 
            name: 'Fives', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 6, 
            name: 'Sixes', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 7, 
            name: 'Total', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 8, 
            name: 'Bonus', 
            value: null, 
            selected: false,
            isAvailable: true
        },
      ],
      // Array for protocol two.
      protocolTwo: [
        {
            id: 1, 
            name: 'Pair', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 2, 
            name: 'Two Pairs', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 3, 
            name: 'Three Of A Kind', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 4, 
            name: 'Four Of A Kind', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 5, 
            name: 'Full House', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 6, 
            name: 'Small Straight', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 7, 
            name: 'Big Straight', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 8, 
            lname: 'Yatzy', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 9, 
            name: 'Chance', 
            value: null, 
            selected: false,
            isAvailable: true
        },
        {
            id: 10, 
            name: 'Total', 
            value: 0, 
            selected: false,
            isAvailable: true
        },
      ],

      //Dice roll counter (0-3).
      counter: 0,
      //Rounds (0-15)
      rounds: 0,
      
      //Sum of protocol area one.
      firstSum: 0,
      //Sum of protocol area two.
      secondSum: 0,

      checkValue: 0,

      savedDice: [],

}
const getters = {
    allDice: (state) => state.dice,
    counter: (state) => state.counter,
    getRounds: (state) => state.rounds,
    getSavedDice: (state) => state.savedDice,
    getCheck: (state) => state.checkValue,
}
const actions = {
    //Checks dice for ones.
    checkValue: (context, x) => {
        var count = 0;
        var sum;
        if(state.savedDice[i].value == x) {
            for(var i = 0; i < state.savedDice.length; i++){
                count++;
                sum = count*x;
                var y = x - 1
                var payload = {index: y, summa: sum}
            }
            context.commit('setCheckValue', payload);
            //Resets counter
            context.commit("resetCounter");
            //Resets savedDice[]
            context.commit("resetSavedDice");
            //Adds to round
            context.commit("increaseRounds");

        }
    }
};
const mutations = {
    // This function rolls tha dice and allows it to roll three times.
    rollDice: (state, nr) => {
        var rand = Math.ceil(Math.random()*6)
        state.dice[nr].value = rand;
    },
    // Toggles the state of the dice (locked or not). 
    changeLock: (state, nr) => {
        state.dice[nr].isLocked = !state.dice[nr].isLocked;
    },
    increaseCounter: (state) => {
        state.counter++;
    },
    resetCounter: (state) => {
        state.counter = 0;
    },
    increaseRounds: (state) => {
        state.rounds++;
    },
    // Adds locked dice to array.
    addToSavedDice: (state, payload) => {
        for(var i = 0; i < state.dice.length; i++) {
            if (state.dice[i].isLocked == false) {
                continue
            }
            else{
                state.savedDice.push(payload);
                state.savedDice.sort();
            }
        }
    },
    // Resets savedDice[] to 0
    resetSavedDice: function (state) {
        state.savedDice.length = 0;

    },
    setCheckValue: (state, payload) => {
        let index = payload.index
        state.protocolOne[index].value = payload.summa
    },
    





    //Need a replay function that resets all values.
    //Pass function to skip turn.


};

export default{
    state,
    getters,
    actions,
    mutations
};