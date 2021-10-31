import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react';
import { events as reducer } from "../reducers"

import { AppContext } from '../contexts/AppContext'
import { EventForm } from './EventForm'
import { Events } from './Events';


export const App = () => {

  const [state, dispatch] = useReducer(reducer, [])
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
      <EventForm />
      <Events />
      </div>
    </AppContext.Provider>
    
  );
}


