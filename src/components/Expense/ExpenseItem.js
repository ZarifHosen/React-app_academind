import { useState } from "react";
import * as React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import Button from "@mui/material/Button";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={clickHandler}
      >
        change title
      </Button>
    </Card>
  );
}

export default ExpenseItem;
