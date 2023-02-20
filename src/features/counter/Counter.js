import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import {Button} from '@mui/material';
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function inc() {
    dispatch({type: 'USER_FETCH_REQUESTED', payload: (count+1)})
  }
  function desc() {
    // console.log("desc");
  }
  return (
    <div>
      <div>
        <Button variant="contained" color="primary" aria-label="Increment value" onClick={() => inc()}>
          Increment
        </Button>
        <div
        style={{
            color: 'green',
            fontSize: '48px',
            fontWeight: '800'
        }}
        >{count}</div>
        <Button variant="contained"  color="warning" aria-label="Decrement value" onClick={() => desc()}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
