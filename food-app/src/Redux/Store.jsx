import {legacy_createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import { Reducer } from './Reducer'

export const Store=legacy_createStore(Reducer,applyMiddleware(thunk))

Store.subscribe(()=>{
    console.log("Updated store")
})