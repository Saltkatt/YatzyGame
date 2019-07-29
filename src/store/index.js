import Vuex from 'vuex';
import Vue from 'vue';
import storage from './modules/storage';


//Load Vuex
Vue.use(Vuex);

//Create store 
export default new Vuex.Store({
    modules: {
        storage,
      
    }
});