import React from "react";

const Button = (props) => {
  return (
    <div>
      <button style={{ margin: 10 }} onClick={props.onClick}>
        {props.category}
      </button>
    </div>
  );
};

export default Button;
