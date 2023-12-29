export const getDashboardData = async () => {
  const res = await fetch("http://localhost:4000/items");
  const data = await res.json();
  return data;
};
