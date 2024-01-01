// export const getTimeApi = async () => {
//   const res = await fetch("https://worldtimeapi.org/api/ip", {
//     next: { revalidate: 5 },
//   });
//   const data = await res.json();
//   return data;
// };

const Dashboard = async () => {
  // let first = await getTimeApi();

  const res = await fetch("https://worldtimeapi.org/api/ip", {
    cache: "default",
    next: {
      revalidate: 5,
    },
  });
  const first = await res.json();
  console.log("first", first.datetime);
  // console.log("first", first.datetime);

  return (
    <div>
      <h1>{first.datetime}</h1>
      {/* {first.map((element, index) => (
        <div key={index}>
          <p>{element.id}</p>
          <p>{element.title}</p>
          <p>{element.category}</p>
          <p>{element.price}</p>
          <p>{element.description}</p>
          <Link href={`/dashboard/${element.id}`}>Open Link</Link>
          <hr></hr>
        </div>
      ))} */}
    </div>
  );
};

export default Dashboard;
