import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="input-field">
        <input
          id={"text"}
          type={"text"}
          className={"validate input-large"}
          value={props.textValue}
          name={props.inputName}
          onChange={props.handleChange}
        />
        {props.textValue ? null : <label htmlFor="text">Text</label>}
        <span
          className="helper-text"
          data-error="wrong"
          data-success="submitted"
        >
          Press Enter to submit
        </span>
      </div>
    </form>
  );
};

export default Form;
