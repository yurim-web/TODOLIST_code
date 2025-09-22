import Container from "../Container";
import Todotitle from "./Todotitle";
import Todoinput from "./Todoinput";

const Todo = () => {
  return (
    <Container>
      <article className="todo_container">
        <Todotitle />
        <Todoinput />
      </article>
    </Container>
  );
};

export default Todo;
