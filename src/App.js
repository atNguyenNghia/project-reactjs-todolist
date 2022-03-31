import React , {useState , useEffect} from "react";
import Alert from "./components/Alert";
import ListToDo from "./components/ListTodo";

function App() {
  const [name , setName] = useState('');
  const [list , setList ]  = useState('');
  const [isEditing , setIsEditing] = useState(false);
  const [editID , setEditID] = useState(null);
  const [alert , setAlert] = useState ({show: false , messgae : '' , type: ''});

  // handleSubmitfrom
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      showAlert(true , 'danger' , 'please enter value');
    }else if(name && isEditing) {
      setList(
        list.map((item) => {
          if(item.id === editID){
            return {...item , title: name};
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true , 'success' , 'value changed');
    }else{
      showAlert(true , 'success' , 'item added to the list');
      const newItem = {id : new Date().getTime().toString() , title: name};
      setList([...list , newItem]);
      setName('');
    }
  };
  const showAlert = (show = false , type = '' , messgae = '') => {
    setAlert({show , type , messgae});
  }
console.log('list ', list);
  const clearList = () => {
    showAlert(true , 'danger', 'empty list');
    setList([]);
  }
  const removeItem = (id) => {
    showAlert(true , 'danger' , 'item removed');
    setList(list.filter((item) => item.id !== id));
  }
  const editItem = (id) => {
    const edititem = list.find((item) => item.id === id);
    console.log('edititem' , edititem)
    setIsEditing(true);
    setEditID(id);
    setName(edititem.title);
  }
  return (
    <section className="section-center">
      <form className="todo-form" onSubmit={handleSubmit} >
        {alert.show && <Alert {...alert} removeAlert = {showAlert} list = {list} />}
        <h3>create todo homework</h3>
        <div className="form-control">
          <input 
          }
            onChange = {(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'add todo'}
          </button>
        </div>
      </form>
      {/* ====== */}
      {list.length > 0 && (
        <div className="todo-container">
          <ListToDo items = {list} removeItem = {removeItem} editItem = {editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear todo
          </button>
        </div>
      )}
    </section>
  );  
}

export default App;
