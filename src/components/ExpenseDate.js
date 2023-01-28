import React from "react";

const ExpenseDate = (props) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = props.date.toLocaleDateString("en-US", options);

  return <div>{formattedDate}</div>;
};

export default ExpenseDate;
