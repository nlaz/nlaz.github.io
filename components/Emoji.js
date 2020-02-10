import React from "react";

const Emoji = ({ value, ...props }) => (
  <span role="img" aria-label="emoji" {...props}>
    {value}
  </span>
);

export default Emoji;
