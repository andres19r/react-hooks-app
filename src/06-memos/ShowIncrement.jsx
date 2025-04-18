import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Generated again");

  return (
    <button
      onClick={() => {
        increment(5);
      }}
      className="btn btn-primary"
    >
      Increment
    </button>
  );
});
