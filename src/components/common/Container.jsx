import { Box } from "@radix-ui/themes";

const Container = ({ children }) => {
  const boxcss = {
    border: "1px solid grey",
    borderRadius: "10px",
    width: "50vw",
    height: "100%",
    alignItems: "center",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgb(255,255,255,0.7)",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  return (
    <Box style={boxcss} width="64px" height="64px">
      {children}
    </Box>
  );
};

export default Container;
