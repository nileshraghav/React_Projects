const AddTodo=()=>{
return(
    <>
    
<div className="row justify-content-md-center">
    
    <div className="row">
      <div className="col-4">
        <input type="text" id="t1"/>
      </div>
           <div className="col-4">
        <input type="date" id="d1"></input>
      </div>
      <div className="col-4">
      <button type="button" className="btn btn-success">Add</button>
      </div>
    </div></div>
    </>
)
}
export default AddTodo;