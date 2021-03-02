import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers, selectUsersIds } from "./users.slice";
import UserTitleWrapper from "./user-title-wrapper.component";

export const Users = () => {
  const dispatch = useDispatch();
  const usersIds = useSelector(selectUsersIds);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  if (usersIds) {
    return (
      <div className="users-list">
        {usersIds.map((id) => {
          return <UserTitleWrapper key={`user-${id}`} id={id} />;
        })}
      </div>
    );
  }
  return null;
};
