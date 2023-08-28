import React from 'react';
import TodoItem from './ToDoItem';

function TodoList(props) {
  return (
    <div className="todo-list">
      <ul>
        {props.tasks.map((task, index) => (
          <TodoItem key={index} id={index} task={task} onDelete={props.onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
