import React from 'react'
import { Event } from './Event'

export const Events = (props) => {
  const {state, dispatch} = props;
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
          { state.map((e, index) => (<Event key={index} e={e} dispatch={dispatch} />))}

        </tbody>
      </table>
    </>
  )
}