import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Draw again");
  return <small>{value}</small>;
});
