const getDashboardId = async (id) => {
  const res = await fetch(`http://localhost:4000/items/${id}`);
  const data = await res.json();
  return data;
};

const DashboardSlug = async ({ params }) => {
  const id = params.id;
  let data = await getDashboardId(id);

  return (
    <div>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.category}</p>
      <p>{data.price}</p>
      <p>{data.description}</p>
      <hr></hr>
    </div>
  );
};

export default DashboardSlug;
