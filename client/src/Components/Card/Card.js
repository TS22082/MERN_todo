import React from "react";

const Card = (props) => {
  const renderContent = () => {
    if (props.form) {
      return props.form;
    } else {
      return <p>{props.text}</p>;
    }
  };

  return (
    <div className="card ">
      <div className="card-content">
        <span className="card-title">{props.title}</span>
        {renderContent()}
      </div>
      <div className="card-action">
        <div className="input-field">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
