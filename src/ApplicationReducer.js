import React, { useCallback, useReducer } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';


//declaring action type.
const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';
// takes a state and action and returns an updated state.
const reducer = (state, action) => {
  if (action.type === GRUDGE_ADD) {
    // adding new grudge to the existing state.
    return [action.payload, ...state];
  }

  if (action.type === GRUDGE_FORGIVE) {
    // adding new grudge to the existing state.
    return state.map(grudge => {
        if(grudge.id !== action.payload.id) return grudge;
        return {...grudge, forgiven: !grudge.forgiven}
    })
    // return [action.payload, ...state];
  }
  return state;
};

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState);


  // creating addGrudge Action Creator, this can actually go into a separate file as well.
  const addGrudge = useCallback(({ person, reason }) => {
    dispatch({
      type: GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false,
        id: id()
      }
    });
    // grudge.id = id();
    // grudge.forgiven = false;
    // setGrudges([grudge, ...grudges]);
  },[dispatch]); 

  const toggleForgiveness = useCallback((id) => {
    dispatch({
        type: GRUDGE_FORGIVE,
        payload: {id}
    });
  }, [dispatch]);

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
