import "./style.css";

const MyComponent = () => {
  const dat = "RICK";
  const datne = [1, 2, 3, 4];

  const datnguyen = 22;
  return (
    <>
      <div>
        {" "}
        Welcome {JSON.stringify(datne)} {datnguyen} tuoi
      </div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Child
      </div>
    </>
  );
};

export default MyComponent;
