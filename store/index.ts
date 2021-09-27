import { createStore,applyMiddleware,Store,AnyAction,compose } from 'redux'
import  thunk,{ThunkDispatch}  from 'redux-thunk'
import  {composeWithDevTools}  from 'redux-devtools-extension'
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'
import { reducer, RootState } from './reducers'

const makeStore: MakeStore<RootState>
    = (context: Context) => createStore(reducer, composeWithDevTools(
        applyMiddleware(thunk)));

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispatch =ThunkDispatch<RootState,void,AnyAction>