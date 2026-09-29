const Task = (props) => {
  return (
    <li>
      <label for={props.id}>
        <input id={props.id} type="checkbox" checked={props.isComplete} />
        {props.name}
      </label>
    </li>
  );
};

export default Task;
