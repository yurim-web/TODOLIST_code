import { Avatar, Box, Button, Text } from "@radix-ui/themes";
import Container from "./Container";
import { useEffect, useState } from "react";

const Log = () => {
  const [name, setname] = useState("guest");

  useEffect(() => {
    const name = prompt("별명을 입력해주세요!");
    setname((prev) => name);
  }, []);

  const logout = () => {
    alert("로그아웃 되었습니다!");
    const name = prompt("새로운 별명을 입력해주세요!");
    setname((prev) => name);
  };

  return (
    <div>
      <Container>
        <Avatar
          fallback={
            <Box width="24px" height="24px">
              <svg viewBox="0 0 64 64" fill="black">
                <path d="M41.5 14c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S33 27.962 33 23 36.813 14 41.5 14zM56.289 43.609C57.254 46.21 55.3 49 52.506 49c-2.759 0-11.035 0-11.035 0 .689-5.371-4.525-10.747-8.541-13.03 2.388-1.171 5.149-1.834 8.07-1.834C48.044 34.136 54.187 37.944 56.289 43.609zM37.289 46.609C38.254 49.21 36.3 52 33.506 52c-5.753 0-17.259 0-23.012 0-2.782 0-4.753-2.779-3.783-5.392 2.102-5.665 8.245-9.472 15.289-9.472S35.187 40.944 37.289 46.609zM21.5 17c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S13 30.962 13 26 16.813 17 21.5 17z" />
              </svg>
            </Box>
          }
        />
        <Text size="3" weight="bold">
          {name}, HELLO🤗
        </Text>
        <Button
          onClick={logout}
          style={{ backgroundColor: "#001F3F" }}
          variant="solid"
        >
          LOGOUT
        </Button>
      </Container>
    </div>
  );
};

export default Log;
