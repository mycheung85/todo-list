import React from 'react';
import Counter from './Counter';

const Task = (props) => { 
  console.log(props.removeTask)
  return (
  <div className="task">
    <span className="task-name"> <button className = "remove-task" onClick = {() => props.removeTask(props.id)}> x </button>{props.name}
    </span>
    
    <Counter
      number = { props.number }
      index = { props.index }
      changeTask = { props.changeTask }
    />
  </div>
  )
};

export default Task;