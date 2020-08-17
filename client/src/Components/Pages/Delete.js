import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Delete = (props) => {
  const history = useHistory();

  return (
    <Container>
      <Card title="Deleting: Are you sure?" text={props.deleteText.text}>
        <Button
          color="teal"
          text="cancel"
          click={() => {
            history.push("/");
          }}
        />
        <Button
          color="red"
          text="delete"
          click={() => {
            axios
              .delete(`/remove/${props.deleteText._id}`)
              .then(() => history.push("/"));
          }}
        />
      </Card>
    </Container>
  );
};

export default Delete;
