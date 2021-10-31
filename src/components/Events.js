import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import { Event } from './Event'


export const Events = () => {
  

  const { state } = useContext(AppContext);
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.events.map((e, index) => (<Event key={index} e={e} />))}

        </tbody>
      </table>
    </>
  )
}