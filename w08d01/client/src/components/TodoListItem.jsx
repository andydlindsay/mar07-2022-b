import './TodoListItem.scss';

const TodoListItem = (props) => {
  return (
    <div className="todolistitem">
      <h2>Task: {props.todo.task} ({props.todo.id}) - { props.todo.completed ? '✅' : '🟩'}</h2>
    </div>
  );
};

export default TodoListItem;
