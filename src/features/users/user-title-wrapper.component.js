import React from "react";
import { useSelector } from "react-redux";
import { selectUserProperties } from "./users.slice";
import User from "./user.component";
import Accordion from "../../app/shared/Accordion";

const UserTitleWrapper = ({ id }) => {
  const title = useSelector(selectUserProperties(id, 'title'));

  return (
    <Accordion title={title}>
      <User userId={id} />
    </Accordion>
  );
};

export default UserTitleWrapper;
