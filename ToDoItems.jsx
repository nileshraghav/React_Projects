function ToDoItems(props) {
  return (
    <>
      {props.item.map((data) => (
        <div class="row">
          <div className="col-7">
            {data.itemname}
            {data.date}
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default ToDoItems;
