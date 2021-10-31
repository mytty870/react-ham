import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react';
import { events as reducer } from "../reducers"
import { EventForm } from './EventForm'
import { Events } from './Events';

export const App = () => {

  const [state, dispatch] = useReducer(reducer, [])
  
  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />

      
    </div>
  );
}


