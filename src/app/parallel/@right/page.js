const Right = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <div style={rightComponentStyle}>
      <h2>Right Component</h2>
    </div>
  );
};

const rightComponentStyle = {
  textAlign: "center",
  backgroundColor: "#98FB98",
  padding: "50px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default Right;
