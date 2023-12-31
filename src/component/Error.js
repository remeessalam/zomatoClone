import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div
      style={{
        background: "green",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        padding: "0",
        flexDirection: "column",
      }}
    >
      <h1 style={{ padding: "0", margin: "0" }}>ERROR</h1>
      <Link to={"/"}>HOME</Link>
    </div>
  );
};

export default Error;
