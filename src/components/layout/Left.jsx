import Date from "../common/Datetime";
import Diary from "../common/Diary";
import Log from "../common/Log";
import Weather from "../common/Weather";

const Left = () => {
  return (
    <div className="left_container">
      <Log />
      <Date />
      <Weather />
      <Diary />
    </div>
  );
};

export default Left;
