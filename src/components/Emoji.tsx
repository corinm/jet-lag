import React from "react";

const Emoji: React.FC<{ emoji: string; label: string }> = ({
  emoji,
  label
}) => (
  <span role="img" aria-label={label}>
    {emoji}
  </span>
);

export default Emoji;
