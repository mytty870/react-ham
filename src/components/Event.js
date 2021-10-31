import { useContext } from 'react';
import { DELETE_EVENT } from '../actions'
import { AppContext } from '../contexts/AppContext';

export const Event = (props) => {
  const { e } = props;

  const { dispatch }  = useContext(AppContext);

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベントを(id=${e.id})本当に削除してもいいですか？`)
    if (result) dispatch({ type: DELETE_EVENT, id: e.id})
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


