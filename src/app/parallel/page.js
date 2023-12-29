const Parallel = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div style={centerComponentStyle}>
      <h2>Center Component</h2>
    </div>
  );
};

const centerComponentStyle = {
  textAlign: "center",
  backgroundColor: "#87CEFA",
  padding: "50px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default Parallel;
