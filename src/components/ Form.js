import React from "react";
import { addUserAction } from "../redux/user/userActions";
import { useDispatch } from "react-redux";
const initialList = ["Learn React", "Learn Firebase", "Learn GraphQL"];

const ListWithAddItem = () => {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState(initialList);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value) {
      setList(list.concat(value));
    }
    dispatch(addUserAction(list));
    setValue("");

    event.preventDefault();
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ListWithAddItem;
