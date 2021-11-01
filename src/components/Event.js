import { useContext } from 'react';
import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions'
import { AppContext } from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils'

export const Event = (props) => {
  const { e } = props;

  const { dispatch }  = useContext(AppContext);

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベントを(id=${e.id})本当に削除してもいいですか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id: e.id})

      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id: ${e.id})を削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }


  return (
    <tr>
      <td>{e.id}</td>
      <td>{e.title}</td>
      <td>{e.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
  
}


