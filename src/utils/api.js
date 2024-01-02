export const getItemData = async () => {
  const res = await fetch("http://localhost:4000/items");
  return res.json();
};

export const getItemDataId = async (id) => {
  const res = await fetch(`http://localhost:4000/items/${id}`);
  return res.json();
};
