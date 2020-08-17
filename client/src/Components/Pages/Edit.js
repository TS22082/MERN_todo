import React from "react";
import { useHistory } from "react-router-dom";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Edit = (props) => {
  const history = useHistory();

  return (
    <Container>
      <Card
        title="Editing: are you sure?"
        form={
          <Form
            textValue={props.editedText.text}
            inputName={"text"}
            handleChange={props.editTextChange}
            handleSubmit={(e) => {
              props.editTextSubmit(e);
              history.push("/");
            }}
          />
        }
      >
        <Button color="grey" text="Cancel" click={() => history.push(`/`)} />
        <Button
          color="red"
          text="Submit"
          click={(e) => {
            props.editTextSubmit(e);
            history.push("/");
          }}
        />
      </Card>
    </Container>
  );
};

export default Edit;
