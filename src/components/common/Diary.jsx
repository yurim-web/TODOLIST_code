import { Text, Button } from "@radix-ui/themes";
import Container from "./Container";
import { useState } from "react";

const Diary = () => {
  const [diaryText, setDiaryText] = useState("Lucky Vicky 💚");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setDiaryText(inputValue.trim());
    setInputValue("");
  };

  return (
    <Container>
      <article>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <Text size="4" weight="bold">
            Diary
          </Text>
        </div>
        <form className="diary_container" onSubmit={handleSubmit}>
          <div className="diary_input_container">
            <input
              className="diary_input"
              type="text"
              placeholder="오늘의 한 줄 일기를 입력해보세요"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit" variant="solid" className="diary_button">
              저장
            </Button>
          </div>
        </form>

        <div style={{ padding: "5px 0px", color: "grey", wordBreak: "break-word" }}>내가 입력한 한 줄 일기가 나옵니다!</div>
      </article>
      <img
        style={{ width: "90px", height: "90px", borderRadius: "999px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUN5jydftiWqA7YasmdwDZoXPYUk235OFmg&s"
      ></img>
    </Container>
  );
};

export default Diary;
