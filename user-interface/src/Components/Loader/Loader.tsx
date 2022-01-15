import loading from "../../Media/loading.svg";
import "../../Css/Loader.css";

export const Loader = () => {
  return (
    <div className="loader flex flex-column justify-center">
      <p>Ju lutem prisni...</p>
      <img src={loading} alt="" />
    </div>
  );
};
