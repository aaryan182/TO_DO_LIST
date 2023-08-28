import React, { useState } from 'react';

function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li
      className={`todo-card ${isChecked ? 'checked' : ''} ${isChecked ? 'visible' : ''}`}
      onMouseEnter={() => setIsChecked(false)}
      onMouseLeave={() => setIsChecked(true)}
    >
      <label className="checkbox-container">
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <span className="checkmark"></span>
      </label>
      {props.task}
      <button className="delete-button" onClick={() => props.onDelete(props.id)}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
