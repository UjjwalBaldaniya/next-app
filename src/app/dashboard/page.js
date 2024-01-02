const Dashboard = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip", {
    next: {
      revalidate: 5,
    },
  });
  const first = await res.json();

  return (
    <div>
      <h1>{first.datetime}</h1>
    </div>
  );
};

export default Dashboard;
