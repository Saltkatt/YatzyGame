
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
            pass: false,
        },
        {
            id: 2, 
            name: 'Twos', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 3, 
            name: 'Threes', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 4, 
            name: 'Fours', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 5, 
            name: 'Fives', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 6, 
            name: 'Sixes', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 7, 
            name: 'Total', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 8, 
            name: 'Bonus', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
      ],
      // Array for protocol two.
      protocolTwo: [
        {
            id: 0, 
            name: 'Pair', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 1, 
            name: 'Two Pairs', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 2, 
            name: 'Three Of A Kind', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 3, 
            name: 'Four Of A Kind', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 4, 
            name: 'Small Straight', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 5, 
            name: 'Big Straight', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 6, 
            name: 'Full House', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 7, 
            name: 'Chance', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 8, 
            name: 'Yatzy', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
        {
            id: 9, 
            name: 'Total', 
            value: null, 
            selected: false,
            isChosen: false,
            pass: false,
        },
      ],
      //Counts chooseButton clicks (0-1)
      btnCounter: 0,
      //Dice roll counter (0-3).
      counter: 0,
      //Rounds (0-15)
      rounds: 14,
      // Array to save locked dice into.
      savedDice: [],

      showRules: false,

      housePair: null,
      houseThreeOfAKind: null,

}
const getters = {
    getPOne: (state) => state.protocolOne,
    getPTwo: (state) => state.protocolTwo,
    allDice: (state) => state.dice,
    getShowRules: (state) => state.showRules,
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
    getPair: (state) => state.protocolTwo[0].value,
    getTwoPair: (state) => state.protocolTwo[1].value,
    getThreeOfAKind: (state) => state.protocolTwo[2].value,
    getFourOfAKind: (state) => state.protocolTwo[3].value,
    getSmallStraight: (state) => state.protocolTwo[4].value,
    getBigStraight: (state) => state.protocolTwo[5].value,
    getFullHouse: (state) => state.protocolTwo[6].value,
    getChance: (state) => state.protocolTwo[7].value,
    getYatzy: (state) => state.protocolTwo[8].value,
    getTotal: (state) => state.protocolTwo[9].value,
    getHousePair: (state) => state.housePair,
    getHouseThreeOfAKind: (state) => state.houseThreeOfAKind,

}
const actions = {
        // Resets all variables 
        replay: (context) => {
            var p1 = context.state.protocolOne;
            var p2 = context.state.protocolTwo;
            var allDice = context.state.dice;
            for(var i = 0; i < p1.length; i++){
                p1[i].value = null;
                p1[i].selected = false;
                p1[i].isChosen = false;
                p1[i].pass = false;
            }
            for(var j = 0; j < p2.length; j++){
                p2[j].value = null;
                p2[j].selected = false;
                p2[j].isChosen = false;
                p2[j].pass = false;
            }
            for(var k = 0; k < allDice.length; k++){
                allDice[k].value = 0;
                allDice[k].isLocked = false;
                allDice[k].selected = false;
            }
            context.commit("resetCounter");
            context.commit("resetBtnCounter");
            context.commit("resetSavedDice");
            //context.commit("resetDiceValue");
            context.commit("resetRounds");

        },

        reset: (context) => {
            //Resets counter, chooseButton counter, savedDice[] and adds to round
            context.commit("resetCounter");
            context.commit("resetBtnCounter");
            context.commit("resetSavedDice");
            context.commit("increaseRounds");
        },
        //Checks dice for the value sent in as x.
        check: (context, x) => {
            var sD = context.state.savedDice;
            var count = 0;
            var sum = 0;
            var y = x - 1;
            var payload = null;
                //Iterates each element in the array and counts all the dice in the array that are the same value as x.   
                sD.forEach((element) => {
                    if(element.value == x){
                    count++;
                }
                //The amount of dice of the correct value is then multiplied by the value of x.
                sum = count*x;
                payload = {index: y, summa: sum};
    
                context.commit('setCheckValue', payload);
            });
                //Sends payload to Total in protocolOne.
                context.commit('addToSumInProtocolOne', payload );
                //Sends payload to Total in protocolTwo.
                context.commit('addToTotalInProtocolTwo', payload);
                //Resets counter, chooseButton counter, savedDice[] and adds to round
                context.dispatch('reset');
                //Checks if bonus should be added.
                context.commit("addBonus");
        },

        /* Receives an id and checks if the value of the protocol id is equal to 0.
        If the value is 0 it sends the id to passOne which changes the pass variable to true.
        */ 
        passProtocolOne: (context, id) => {
            var p1 = context.state.protocolOne;
            if(p1[id].value < 1 ){
                context.commit('passOne', id);
            }
        },
        /* Receives an id and checks if the value of the protocol id is equal to 0.
        If the value is 0 it sends the id to passOne which changes the pass variable to true.
        */ 
        passProtocolTwo: (context, id) => {
            var p2 = context.state.protocolTwo;
            if(p2[id].value < 1 ){
                context.commit('passTwo', id);
            }
        },

        //This function contains a switch-statement used activate the correct function for the chosen protocolTwo item.
        checkProtocolTwo: (context, x) => {
            switch(x) {
                case 0:
                    context.dispatch('pair');
                    break;
                case 1:
                    context.dispatch('twoPair');
                    break;
                case 2:
                    context.dispatch('threeOfAKind');
                    break;
                case 3:
                    context.dispatch('fourOfAKind');
                    break;
                case 4:
                    context.dispatch('smallStraight');
                    break;
                case 5:
                    context.dispatch('bigStraight');
                    break;
                case 6:
                    context.dispatch('fullHouse');
                    break;
                case 7:
                    context.dispatch('chance')
                    break;
                case 8:
                    context.dispatch('yatzy');
                    break;
            
            }   
        },

        pair: (context) => {
            var sD = context.state.savedDice;
            var payload = null;
            var y = 0;
            var sum = 0;

                function result(nr) {
                return sD.filter(function(dice) {
                    return dice.value == nr;
                });
                }
                for (let i = 1; i <= 6; i++) {
                    var x = result(i);
                    if (x.length == 2) {
                        sum = x[0].value * 2;
                    }  
                }
                if(sum > 0) {
                    payload = {index: y, summa: sum};
                    context.commit('setPairSum', payload)
                }
                else {
                    sum = 0;
                    payload = {index: y, summa: sum};
                    context.commit('setPairSum', payload)
                }  
                //Sends payload to Total in protocolTwo.
                context.commit('addToTotalInProtocolTwo', payload);

                //Resets counter, chooseButton counter, savedDice[] and adds to round
                context.dispatch('reset');
        },

        /*
        Filters and loops through values 
        to check for pairs, uses a counter 
        to check the amount of pairs.
        */
        twoPair(context){
                var sD = context.state.savedDice; 
                var payload = null;
                var y = 1;  
                //Receives a nr from variable x, filters through savedDice array 
                //for dice with the same value as x and returns a temporary array with dice.values the same as x.    
                function result(nr) {
                    return sD.filter(function(dice) {
                        return dice.value == nr;
                    });
                }
                //Pair counter
                var pairsFound = 0;
                var sum = 0;
                //Loops through values 1 through 6
                for (let i = 1; i <= 6; i++) {
                    // x = value in filtered array
                    var x = result(i);
                    // check if there are 2 values that are the same
                    if (x.length == 2) {
                        // count pair
                        pairsFound ++;
                        // score equals and adds the pair value
                        sum += x[0].value * 2;
                        // if there are two pairs score is sent to sum.
                        if (pairsFound == 2) {
                            console.log("sum: " + sum)
                            payload = {index: y, summa: sum};
                        }
                    }
                }
                // If sum is greater than 0 send payload to mutation.
                if( pairsFound > 1) {
                    console.log("sum after if: " + sum)
                    context.commit('setTwoPairs', payload) 
                }
                // If sum is no greater than 0 send sum = 0 in payload to mutation.
                else{
                    sum = 0;
                    payload = {index: y, summa: sum};
                    context.commit('setTwoPairs', payload)
                }
                //Sends payload to Total in protocolTwo.
                context.commit('addToTotalInProtocolTwo', payload);
                //Resets counter, chooseButton counter, savedDice[] and adds to round
                context.dispatch('reset');
        },
        /*
            Filters through the dice values and 
            loops them through a for-loop to check 
            for three dice with the same value.
            */ 
        threeOfAKind(context) {
            var sD = context.state.savedDice; 
            var payload = null;
            var y = 2;  
            var sum = 0;
            // This function filters through savedDice array 
            // checking for the value sent in by the x variable further down.
            // dice that with the same value as x are then sent into a temporary dice array.
            function result(nr) {
                return sD.filter(function(dice) {
                    return dice.value == nr;
                });
            }
            for (let i = 1; i <= 6; i++) {
                var x = result(i);
                // if the temporary dice[] contains 3 of the same value.
                // sum equals that value multiplied by 3.
                if (x.length == 3) {
                    sum = x[0].value * 3;
                    
                }
            }
            // If sum is no greater than 0 send sum = 0 in payload to mutation.
            if(sum > 0) {
                payload = {index: y, summa: sum};
                context.commit('setThreeOfAKind', payload);
            }
            // If sum is no greater than 0 send sum = 0 in payload to mutation.
            else {
                sum = 0;
                payload = {index: y, summa: sum};
                context.commit('setThreeOfAKind', payload)
            }
            //Sends payload to Total in protocolTwo.
            context.commit('addToTotalInProtocolTwo', payload);
            //Resets counter, chooseButton counter, savedDice[] and adds to round
            context.dispatch('reset');
        },
        /*
        Filters through the dice values and 
        loops them through a for-loop to check 
        for four dice with the same value.
        */
        fourOfAKind(context) {
                var sD = context.state.savedDice;
                var payload = null;
                var y = 3;   
                var sum = 0;
                // This function filters through savedDice array 
                // checking for the value sent in by the x variable further down.
                // dice that with the same value as x are then sent into a temporary dice array.
                function result(nr) {
                    return sD.filter(function(dice) {
                        return dice.value == nr;
                    });
                }
                // Loops through the temporary dice[] and checks for dice of the same value.
                for (let i = 1; i <= 6; i++) {
                    var x = result(i);
                    // if the temporary dice[] contains 4 of the same value.
                    // sum equals that value multiplied by 4.
                    if (x.length == 4) {
                        sum = x[0].value * 4;
                        
                    }
                }
                // If sum is greater than 0 send payload to mutation.
                if (sum > 0) {
                    payload = {index: y, summa: sum};
                    context.commit('setFourOfAKind', payload)
                }
                // If sum is no greater than 0 send sum = 0 in payload to mutation.
                else {
                    sum = 0;
                    payload = {index: y, summa: sum};
                    context.commit('setFourOfAKind', payload)
                }
            //Sends payload to Total in protocolTwo.
            context.commit('addToTotalInProtocolTwo', payload);
            //Resets counter, chooseButton counter, savedDice[] and adds to round
            context.dispatch('reset');
            
        },
        /*
        Filters through array of dice sorts same 
        die into one array and distinct die into another.
        */
        smallStraight(context){
            var sum;
            var sD = context.state.savedDice; 
            var payload = null;
            var y = 4;   
            var diceValues = [...new Set(sD.map(x => x.value))];

            //Creates an array (result(i)) that adds values that are the same to the array
            function result(nr) {
                return sD.filter(function(dice) {
                    return dice.value == nr;
                });
            }
            function distinct(value, index) {
                return diceValues.indexOf(value) === index;
            }
            //Creates an array (distinctValues) that adds values that different 
            const distinctValues = diceValues.filter(distinct);
            //Loops through the length of the distinctValues array
            for (var j = 0; j < distinctValues.length; j++){
                //result(i) array checks if there are any sixes.
                var x = result(6);
                //If there are 5 distinct values in the distinctValues array and result(i) array has no indicies
                if(distinctValues.length == 5 && x.length == 0) {
                    //summa is 15
                    sum = 15;
                }
                else{
                    //else summa is 0
                    sum = 0;
                }
            }
            if (sum > 0) {
                payload = {index: y, summa: sum};
                context.commit('setSmallStraight', payload)
            }
            else {
                sum = 0;
                payload = {index: y, summa: sum};
                context.commit('setSmallStraight', payload)
            }
            
            //Sends payload to Total in protocolTwo.
            context.commit('addToTotalInProtocolTwo', payload);
            //Resets counter, chooseButton counter, savedDice[] and adds to round
            context.dispatch('reset');

        },
        /*
        Filters through array of dice sorts same 
        die into one array and distinct die into another.
        */
        bigStraight(context) {
            var sum;
            var sD = context.state.savedDice;
            var payload = null;
            var y = 5;    
            var diceValues = [...new Set(sD.map(x => x.value))];
            //Creates an array (result(i)) that adds values that are the same to the array
            function result(nr) {
                return sD.filter(function(dice) {
                    return dice.value == nr;
                });
            }
            function distinct(value, index) {
                return diceValues.indexOf(value) === index;
            }
            //Creates an array (distinctValues) that adds values that different using the distinct function.
            const distinctValues = diceValues.filter(distinct);
            //Loops through the length of the distinctValues array
            for (var j = 0; j < distinctValues.length; j++){
                //result(i) array checks if there are any ones.
                var x = result(1);
                //If there are 5 distinct values in the distinctValues array and result(i) array has no indicies
                if(distinctValues.length == 5 && x.length == 0) {
                    //summa is 20
                    sum = 20;
                }
                else{
                    //else summa is 0
                    sum = 0;
                }
            }
            if (sum > 0) {
                payload = {index: y, summa: sum};
                context.commit('setBigStraight', payload);
            }
            else {
                sum = 0;
                payload = {index: y, summa: sum};
                context.commit('setBigStraight', payload);
            }
                //Sends payload to Total in protocolTwo.
                context.commit('addToTotalInProtocolTwo', payload);
                //Resets counter, chooseButton counter, savedDice[] and adds to round
                context.dispatch('reset');
                
        },

        housePair: (context) => {
            var sD = context.state.savedDice;
            var summa;
            function result(nr) {
                return sD.filter(function(dice) {
                    return dice.value == nr;
                });
            }
            for (let i = 1; i <= 6; i++) {
                var x = result(i);
                if (x.length == 2) {
                    summa = x[0].value * 2;
                    if(summa > 0){
                        context.commit('setHousePair', summa);
                    }
                    else {
                        summa = null;
                        context.commit('setHousePair', summa);
                    }
                }
            }
        },

        houseThreeOfAKind(context) {
            var sD = context.state.savedDice;
            var summa; 
                function result(nr) {
                    return sD.filter(function(dice) {
                        return dice.value == nr;
                    });
                }
                for (let i = 1; i <= 6; i++) {
                    var x = result(i);
                    if (x.length == 3) {
                        summa = x[0].value * 3;
                        if(summa > 0){
                            context.commit('setHouseThreeOfAKind', summa);
                        }
                        else {
                            summa = null;
                            context.commit('setHouseThreeOfAKind', summa);
                        }
                    }
                    
                }
        },

        fullHouse(context) {
            context.dispatch('housePair');
            context.dispatch('houseThreeOfAKind');
            var sum;
            var payload = null;
            var y = 6;    
            var a = context.state.housePair;
            var b = context.state.houseThreeOfAKind;
            console.log("a: " + a);
            console.log("b: " + b);
            if( a > 0 && b > 0) {
                sum = a + b;
                console.log("sum: " + sum);
                payload = {index: y, summa: sum};
                context.commit('setFullHouse', payload);
            }
            else {
                sum = 0;
                payload = {index: y, summa: sum};
                context.commit('setFullHouse', payload);
            }
            //Sends payload to Total in protocolTwo.
            context.commit('addToTotalInProtocolTwo', payload);
            //Resets counter, chooseButton counter, savedDice[] and adds to round
            context.dispatch('reset');
        },

        // Adds all the dice values together.
        chance(context){
            var allD = context.state.dice; 
            var sum = null;
            var payload = null;
            var y = 7;   
            
            function result(nr) {
                return allD.filter(function(dice) {
                    return dice.value == nr;
                });
            }
            for (let i = 1; i <= 6; i++) {
                var x = result(i);
                for (var j = 0; j < x.length; j++){
                    sum += x[j].value
                }
                
            }
            if (sum > 0) {
                payload = {index: y, summa: sum};
                context.commit('setChance', payload);
            }
            else {
                sum = 0;
                payload = {index: y, summa: sum};
                context.commit('setChance', payload);
            }
            //Sends payload to Total in protocolTwo.
            context.commit('addToTotalInProtocolTwo', payload);
            //Resets counter, chooseButton counter, savedDice[] and adds to round
            context.dispatch('reset');
        },
        /*
        Filters through the dice values and 
        loops them through a for-loop to check 
        if they all have the same value.
        */
        yatzy(context){
            var sD = context.state.savedDice; 
            var payload = null;
            var y = 8;  
            var sum;
            function result(nr) {
                return sD.filter(function(dice) {
                    return dice.value == nr;
                });
            }
            for (let i = 1; i <= 6; i++) {
                var x = result(i);
                if (x.length == 5) {
                    sum = 50;
                }
            }
            if(sum == 50) {
                payload = {index: y, summa: sum};
                context.commit('setYatzy', payload);
            }
            else {
                sum = 0;
                payload = {index: y, summa: sum};
                context.commit('setYatzy', payload);
            }
            //Sends payload to Total in protocolTwo.
            context.commit('addToTotalInProtocolTwo', payload);
            //Resets counter, chooseButton counter, savedDice[] and adds to round
            context.dispatch('reset');

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
    // Toggles showRules (true/false)
    showRules:(state) => {
        state.showRules = !state.showRules;
      },
    // Toggles protocolOne variable isChosen (true/false)
    chooseOne: (state, id) => {
        state.protocolOne[id].isChosen = true;
    },
    // Toggles protocolTwo variable isChosen (true/false)
    chooseTwo: (state, id) => {
        state.protocolTwo[id].isChosen = true;
    },
    // Receives an id and changes the selected variable to true.
    selectOne: (state, id) => {
        state.protocolOne[id].selected = true;
    },
    // Receives an id and changes the selected variable to true.
    selectTwo: (state, id) => {
        state.protocolTwo[id].selected = true;
    },
    // Receives an id and changes the pass variable to true.
    passOne: (state, id) => {
        state.protocolOne[id].pass = true;
    },
    // Receives an id and changes the pass variable to true.
    passTwo: (state, id) => {
        state.protocolTwo[id].pass = true;
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
    resetRounds: (state) => {
        state.rounds = 0;
    },
    // Adds locked dice to array.
    addToSavedDice: (state, payload) => {
        state.savedDice.push(payload);
        state.savedDice.sort();
    },
    // Resets savedDice[] to 0
    resetSavedDice: (state) => {
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
    /* Receives payload from check function and adds new payload.summa to the current value of protocolOne Total.*/
    addToSumInProtocolOne: (state, payload) => {
        state.protocolOne[6].value += payload.summa;
        
    },
    addToTotalInProtocolTwo: (state, payload) => {
        state.protocolTwo[9].value += payload.summa;
    },
    /* Checks if the bonus of 50 points should be added. */
    addBonus: (state) => {
        var score = state.protocolOne[6].value;
        if(score >= 63) {
            state.protocolOne[7].value = 50;
            state.protocolTwo[9].value += 50;
        }
    },
    setPairSum: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setTwoPairs: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setThreeOfAKind: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setFourOfAKind: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setSmallStraight: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setBigStraight: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setFullHouse: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setChance: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setYatzy: (state, payload) => {
        let id = payload.index;
        state.protocolTwo[id].value = payload.summa;
    },
    setHousePair: (state, nr) => {
        state.housePair = nr;
    },
    setHouseThreeOfAKind: (state, nr) => {
        state.houseThreeOfAKind = nr
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