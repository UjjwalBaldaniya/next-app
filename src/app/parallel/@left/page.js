import Link from "next/link";

const getLeftData = async () => {
  const res = await fetch("http://localhost:4000/items");
  const data = await res.json();
  return data;
};

const Left = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  let first = await getLeftData();
  return (
    <div>
      {first.map((element, index) => (
        <div key={index} style={leftComponentStyle}>
          <p>{element.id}</p>
          <p>{element.title}</p>
          <p>{element.category}</p>
          <p>{element.price}</p>
          <p>{element.description}</p>
          <Link href={`/dashboard/${element.id}`}>Open Link</Link>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

const leftComponentStyle = {
  textAlign: "center",
  backgroundColor: "#FFD700",
  padding: "50px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default Left;
