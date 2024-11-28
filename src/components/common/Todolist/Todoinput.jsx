import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useState } from "react";

const Todoinput = () => {
  const inputcss = {
    width: "30vw",
    height: "30px",
    borderRadius: "8px",
    padding: "5px 10px",
  };
  const boxcss = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    gap: "40px",
  };

  const btncss = {
    backgroundColor: "#001F3F",
    padding: "20px 30px",
    borderRadius: "8px",
  };

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
    <article
      style={{ display: "flex", flexDirection: "column", overflowY: "scroll" }}
    >
      <div style={boxcss}>
        <input
          style={inputcss}
          type="text"
          placeholder="TO-DO LIST를 입력해주세요."
          onChange={(e) => setInput((prev) => e.target.value)}
        />
        <Button onClick={abc} variant="solid" style={btncss}>
          SEND!
        </Button>
      </div>

      {todos.map((v, i) => (
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #001F3F",

            padding: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>
            <CheckIcon width={"20px"} height={"20px"} />
            {v}
          </span>

          <TrashIcon width={"20px"} height={"20px"} onClick={() => remove(i)} />
        </div>
      ))}
    </article>
  );
};

export default Todoinput;
