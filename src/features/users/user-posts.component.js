import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../../app/shared/Accordion";
import { selectUserProperties } from "./users.slice";

const UserPosts = ({ userId }) => {
  const posts = useSelector(selectUserProperties(userId, 'posts'));

  if (posts && posts.length > 0) {
    return (
      <Accordion title="Posts">
        {posts.map((post) => (
          <div key={`post-${post.id}`} className="posts-card boundaries">
            <strong className="boundaries">{post.title}</strong>
            <div>{post.body}</div>
          </div>
        ))}
      </Accordion>
    );
  }

  return null;
};

export default UserPosts;
