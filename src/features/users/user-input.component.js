import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInput, selectUserProperties } from "./users.slice";

const UserInput = ({ userId, inputType }) => {
  const inputValue = useSelector(selectUserProperties(userId, inputType));

  const dispatch = useDispatch();

  const onInputChange = (e) =>
    dispatch(updateUserInput({ userId, inputType, value: e.target.value }));

  return (
    <input
      className="boundaries"
      type="text"
      value={inputValue}
      onChange={onInputChange}
    />
  );
};

export default UserInput;
