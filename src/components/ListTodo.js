import React from "react";
import {FaEdit , FaTrash} from 'react-icons/fa';

const ListToDo = ( {items , removeItem , editItem}) => {
    console.log('item' , items)
    return (
        <div className="todo-list-items">
            {items.map((item) => {
                return (
                    <article className="tod-item"  key = {item.id}>
                        <p className="title">{item.title}</p>
                        <div className="btn-container">
                            <button type="button"
                             className="edit-btn"
                             onClick={() => editItem()}
                             >
                                 <FaEdit/>
                            </button>
                            <button type="button"
                                className="detele-btn"
                                onClick={() => removeItem()}
                            >
                                <FaTrash/>
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    )
}
export default ListToDo;