import React from "react";
import UserInput from "./user-input.component";
import { useDispatch } from "react-redux";
import { fetchUserPosts } from "./users.slice";
import UserPosts from "./user-posts.component";

const inputFields = ["name", "username", "email", "street", "suite", "city", "phone", "website"];

const User = ({ userId }) => {
  const dispatch = useDispatch();
  const getUsersPosts = () => dispatch(fetchUserPosts(userId));

  return (
    <div className="user-card boundaries">
      {inputFields.map((input) => (
        <UserInput
          key={`input-${input}-${userId}`}
          userId={userId}
          inputType={input}
        />
      ))}
      <button className="posts-btn" onClick={getUsersPosts}>
        Get user’s posts
      </button>
      <UserPosts userId={userId} />
    </div>
  );
};

export default User;
