export const getTimeApi = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip", {
    next: { revalidate: 1 },
  });
  const data = await res.json();
  return data;
};

const Left = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  let first = await getTimeApi();
  return (
    <div>
      <h1>{first.datetime}</h1>
    </div>
  );
};

export default Left;
