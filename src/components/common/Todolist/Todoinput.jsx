import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useState } from "react";

const Todoinput = () => {

  // 상태 관리 및 함수 정의는 여기로 이동
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const abc = () => {
    setTodos((prev) => [...prev, input]);
  };

  const remove = (i) => {
    setTodos((prev) => {
      const newArr = [...prev].filter((v, idx) => idx != i);
      return newArr;
    });
  };
  return (
    <article className="todo_list_container">
      <div className="todo_input_container">
        <input
          className="todo_input"
          type="text"
          placeholder="TO-DO LIST를 입력해주세요."
          onChange={(e) => setInput((prev) => e.target.value)}
        />
        <Button onClick={abc} variant="solid" className="todo_button">
          SEND!
        </Button>
      </div>

      <div className="todo_list">
        {todos.map((v, i) => (
          <div key={i} className="todo_item">
            <span className="todo_text">
              <CheckIcon width={"20px"} height={"20px"} />
              {v}
            </span>
            <TrashIcon 
              width={"20px"} 
              height={"20px"} 
              onClick={() => remove(i)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Todoinput;
