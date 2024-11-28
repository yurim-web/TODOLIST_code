import Date from "../common/Datetime";
import Diary from "../common/Diary";
import Log from "../common/Log";
import Weather from "../common/Weather";

const Left = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Log />
      <Date />
      <Weather />
      <Diary />
    </div>
  );
};

export default Left;
