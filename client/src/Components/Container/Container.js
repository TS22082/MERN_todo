import React from "react";

const Container = (props) => {
  const styles = {
    spaceTop: {
      paddingTop: "30px",
    },
  };

  return (
    <div className="container" style={styles.spaceTop}>
      {props.children}
    </div>
  );
};

export default Container;
