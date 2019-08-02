
const state = {
    dice: [
        {
            id: 0,
            value: 0,
            isLocked: false,
            selected: false
        },
        {
            id: 1,
            value: 0,
            isLocked: false,
            selected: false
        },
        {
            id: 2,
            value: 0,
            isLocked: false,
            selected: false
        },
        {
            id: 3,
            value: 0,
            isLocked: false,
            selected: false
        },
        {
            id: 4,
            value: 0,
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
      //Counts chooseButton clicks (0-1)
      btnCounter: 0,
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
    btnCounter:(state) => state.btnCounter,
    counter: (state) => state.counter,
    getRounds: (state) => state.rounds,
    getSavedDice: (state) => state.savedDice,
    getCheckValue: (state) => state.checkValue,
    getOnes: (state) => state.protocolOne[0].value,
    
}
const actions = {
    //Checks dice for the value sent in as x.
    check: (context, x) => {
        var length;
        var sum;
        var sD = context.state.savedDice;
        
        for(var i = 0; i < sD.length; i++){
            length = sD.length;
            console.log(length)
            console.log("before if", sD[i])

            if(sD[i] == x) {
                sum = length*x;
                var y = x - 1
                console.log("before payload")
                var payload = {index: y, summa: sum}
                context.commit('setCheckValue', payload);
                console.log("past first commit")
            }
            else{
                console.log("savedDice array content is not valid")
                //Add error message
            }
        
            
            //Resets counter
            context.commit("resetCounter");
            //Resets chooseButton counter
            context.commit("resetBtnCounter");
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
    increaseBtnCounter: (state) => {
        state.btnCounter++;
    },
    resetBtnCounter: (state) => {
        state.btnCounter = 0;
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
        state.savedDice.push(payload);
        state.savedDice.sort();
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