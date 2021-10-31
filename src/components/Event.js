

export const Event = (props) => {
  const { e, dispatch } = props;

  const handleClickDeleteButton = () => {
    dispatch({ type: 'DELETE_EVENT', id: e.id})
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


