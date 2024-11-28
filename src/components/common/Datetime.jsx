import { Heading, Text } from "@radix-ui/themes";
import Container from "./Container";
import { useEffect, useState } from "react";

const Datetime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // 1초마다 현재 시간 업데이트
  }, []);

  const year = dateTime.getFullYear(); // 연도
  const month = dateTime.getMonth() + 1; // 월 (0부터 시작하므로 1을 더해야 함)
  const day = dateTime.getDate(); // 일
  const hours = dateTime.getHours(); // 시간 (24시간제)
  const minutes = dateTime.getMinutes(); // 분
  const seconds = dateTime.getSeconds(); // 초

  return (
    <div>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <Text size="4" weight="bold">
            Today
          </Text>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",

            textAlign: "right",
          }}
        >
          <Heading size="5">
            {year}년{month}월{day}일
          </Heading>
          <Heading size="4">
            {hours}시{minutes}분{seconds}초
          </Heading>
        </div>
      </Container>
    </div>
  );
};

export default Datetime;
