import { Box } from "@radix-ui/themes";

const Container = ({ children }) => {
  return (
    <Box className="container">
      {children}
    </Box>
  );
};

export default Container;
