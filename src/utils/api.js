export const getDashboardData = async () => {
  const res = await fetch("http://localhost:4000/items");
  const data = await res.json();
  return data;
};
// export const getTimeApi = async () => {
//   const res = await fetch("https://worldtimeapi.org/api/ip", {
//     next: { revalidate: 1 },
//   });
//   const data = await res.json();
//   return data;
// };
