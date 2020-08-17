import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Home = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.retrieveTasks();
    // eslint-disable-next-line
  }, []);

  const showTasks = () => {
    const arr = props.tasks.map((task, id) => (
      <Card key={id} title="Todo Item" text={task.text}>
        <Button
          color="teal"
          text="edit"
          click={() => {
            props.updateActiveTask({ ...task, index: id });
            history.push("/edit");
          }}
        />
        <Button
          color="red"
          text="delete"
          click={() => {
            props.updateActiveTask({ ...task, index: id });
            history.push("/delete");
          }}
        />
      </Card>
    ));

    return arr.reverse();
  };

  return (
    <Container>
      <div className="row">
        <div className="col m12 l6">
          <Form
            inputName={"todoText"}
            handleChange={props.newTextChange}
            handleSubmit={props.newTextSubmit}
          />
        </div>
        <div className="col m12 l6">{!props.tasks ? null : showTasks()}</div>
      </div>
    </Container>
  );
};

export default Home;
