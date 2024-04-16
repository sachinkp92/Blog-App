import React from "react";

const BlogItem = ({ cardDetails }) => {
  let { title, content } = cardDetails;
  return (
    <li>
      <h4>{title}</h4>
      <p>{content}</p>
    </li>
  );
};

export default BlogItem;
