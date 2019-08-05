
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
            isChosen: false,
        },
        {
            id: 2, 
            name: 'Twos', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 3, 
            name: 'Threes', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 4, 
            name: 'Fours', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 5, 
            name: 'Fives', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 6, 
            name: 'Sixes', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 7, 
            name: 'Total', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 8, 
            name: 'Bonus', 
            value: null, 
            selected: false,
            isChosen: false,
        },
      ],
      // Array for protocol two.
      protocolTwo: [
        {
            id: 1, 
            name: 'Pair', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 2, 
            name: 'Two Pairs', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 3, 
            name: 'Three Of A Kind', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 4, 
            name: 'Four Of A Kind', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 5, 
            name: 'Full House', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 6, 
            name: 'Small Straight', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 7, 
            name: 'Big Straight', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 8, 
            lname: 'Yatzy', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 9, 
            name: 'Chance', 
            value: null, 
            selected: false,
            isChosen: false,
        },
        {
            id: 10, 
            name: 'Total', 
            value: 0, 
            selected: false,
            isChosen: false,
        },
      ],
      //Counts chooseButton clicks (0-1)
      btnCounter: 0,
      //Dice roll counter (0-3).
      counter: 0,
      //Rounds (0-15)
      rounds: 0,
      
      //Sum of protocol area two.
      secondSum: 0,

      checkValue: 0,
      
      savedDice: [],

}
const getters = {
    getProtocolOne: (state) => state.protocolOne,
    getProtocolTwo: (state) => state.protocolTwo,
    allDice: (state) => state.dice,
    btnCounter:(state) => state.btnCounter,
    counter: (state) => state.counter,
    getRounds: (state) => state.rounds,
    getSavedDice: (state) => state.savedDice,
    getCheckValue: (state) => state.checkValue,
    getOnes: (state) => state.protocolOne[0].value,
    getTwos: (state) => state.protocolOne[1].value,
    getThrees: (state) => state.protocolOne[2].value,
    getFours: (state) => state.protocolOne[3].value,
    getFives: (state) => state.protocolOne[4].value,
    getSixes: (state) => state.protocolOne[5].value,
    getSumPOne: (state) => state.protocolOne[6].value,
    getBonus: (state) => state.protocolOne[7].value,
    
    
    
}
const actions = {
    //Checks dice for the value sent in as x.
    check: (context, x) => {
        var sD = context.state.savedDice;
        var count = 0;
        var sum = 0;
        var y = x - 1;
        var payload = null;
        //var protocol = context.state.protocolOne[y].isAvailable;

        //Iterates each element in the array and counts all the dice in the array that are the same value as x.   
        sD.forEach((element) => {
            if(element.value == x){
            count++;
        }
        //The amount of dice of the correct value is then multiplied by the value of x.
        sum = count*x;
        payload = {index: y, summa: sum};
   
        context.commit('setCheckValue', payload);
        //context.commit('chooseOne', y);
        
        
    
        });

        context.commit('addToSumInProtocolOne', payload )
        console.log('mutation:' + payload.summa)
            //Resets counter
            context.commit("resetCounter");
            //Resets chooseButton counter
            context.commit("resetBtnCounter");
            //Resets savedDice[]
            context.commit("resetSavedDice");
            //Adds to round
            context.commit("increaseRounds");
            
            
    },
  
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
    // Resets isLocked to false.
    resetIsLocked: (state) => {
        for(let i = 0; i < state.dice.length; i++){
            state.dice[i].isLocked = false;
        }
    },
    // Toggles protocolOne variable isChosen (true/false)
    chooseOne: (state, id) => {
        state.protocolOne[id].isChosen = !state.protocolOne[id].isChosen;
    },
    chooseTwo: (state, id) => {
        state.protocolTwo[id].isChosen = !state.protocolTwo[id].isChosen;
    },
    selectOne: (state, id) => {
        state.protocolOne[id].selected = !state.protocolOne[id].selected;
    },
    selectTwo: (state, id) => {
        state.protocolTwo[id].selected = !state.protocolTwo[id].selected;
    },

    // Increase choose button counter
    increaseBtnCounter: (state) => {
        state.btnCounter++;
    },
    // Resets choose button counter
    resetBtnCounter: (state) => {
        state.btnCounter = 0;
    },
    // Increases counter
    increaseCounter: (state) => {
        state.counter++;
    },
    // Resets counter
    resetCounter: (state) => {
        state.counter = 0;
    },
    // Increases rounds
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
    // Resets dice values to 0
    resetDiceValue: (state) => {
        for(let i = 0; i < state.dice.length; i++){
            state.dice[i].value = 0;
        }
    },
    // Receives payload index position and value
    setCheckValue: (state, payload) => {
        let index = payload.index
        state.protocolOne[index].value = payload.summa
    },
    addToSumInProtocolOne: (state, payload) => {

        state.protocolOne[6].value += payload.summa;
        
    },

    addBonus: (state) => {
        state.protocolOne[7].value = 50;
        if(score >= 63) {
            
        }
    }
    





    //Need a replay function that resets all values.
    //Pass function to skip turn.


};

export default{
    state,
    getters,
    actions,
    mutations
};