import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react';
import reducer from "../reducers"


import { AppContext } from '../contexts/AppContext'
import { EventForm } from './EventForm'
import { Events } from './Events';

import { OperationLogs } from './OperationLogs'


export const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
      <EventForm />
      <Events />
      <OperationLogs />
      </div>
    </AppContext.Provider>
    
  );
}


