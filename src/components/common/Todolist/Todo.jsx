import Container from "../Container";
import Todotitle from "./Todotitle";
import Todoinput from "./Todoinput";

const Todo = () => {
  const css = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    height: "50vw",
  };

  return (
    <Container>
      <article style={css}>
        <Todotitle />
        <Todoinput />
      </article>
    </Container>
  );
};

export default Todo;
